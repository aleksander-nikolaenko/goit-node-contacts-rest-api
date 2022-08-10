const fs = require("fs/promises");
const path = require("path");
const Jimp = require("jimp");
const serviceUser = require("../../services/users");

const { basedir } = global;
const publicDir = path.join(basedir, "..", "public");

const updateAvatar = async (req, res) => {
  const { _id: id } = req.user;
  // console.log(req);
  const { path: tempPath, originalname } = req.file;
  const newName = `${id}${path.extname(originalname)}`;
  const avatarUrl = path.join("avatars", newName);
  const uploadPath = path.join(publicDir, avatarUrl);

  Jimp.read(tempPath)
    .then((img) => {
      return img.resize(250, 250).write(uploadPath);
    })
    .catch((err) => {
      throw err;
    })
    .finally(() => {
      fs.unlink(req.file.path).then();
    });

  const result = await serviceUser.updateUserAvatarById(id, avatarUrl);

  res.status(200).json({
    avatarURL: result.avatarURL,
  });
};

module.exports = updateAvatar;
