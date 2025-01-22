module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define("User", {
      id: {
          type: DataTypes.INTEGER,  
          primaryKey: true,
          autoIncrement: true,
      },
      type: {
          type: DataTypes.ENUM('individual', 'business'),
          allowNull: false,
      },
      user_id: {
          type: DataTypes.STRING(30),
          allowNull: false,
          unique: true,
      },
      pw: {
          type: DataTypes.STRING(30),
          allowNull: false,
      },
      name: {
          type: DataTypes.STRING(30),
          allowNull: false,
      },
      phone: {
          type: DataTypes.STRING(30),
          allowNull: false,
      },
      email: {
          type: DataTypes.STRING(30),
          allowNull: false,
      },
      birth: {
          type: DataTypes.DATEONLY,
          allowNull: true,
      },
      sex: {
          type: DataTypes.ENUM('male', 'female'),
          allowNull: true,
      },
      allTermsChecked: {
          type: DataTypes.STRING(30),
          allowNull: false,
      }
  });
  return user;
}