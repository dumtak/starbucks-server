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
        zonecode: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
    address: {
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
            allowNull: false,
        },
        sex: {
            type: DataTypes.ENUM('male', 'female'),
            allowNull: true,
        },
        store:{
            type: DataTypes.STRING(50),
            allowNull: true,
      },
      allTermsChecked: {
          type: DataTypes.STRING(30),
          allowNull: false,
      }
  });
  return user;
}