const { saltRounds } = require('../config');


module.exports = (mongoose, bcrypt) => {

    const { Schema, model: Model } = mongoose;
    const { String, ObjectId } = Schema.Types;

    const userSchema = new Schema({

        userName: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        appliedForPositions: [
            {
                type: ObjectId,
                ref: "Careers"
            }
        ],

    })

    userSchema.methods = {
        comparePasswords(password) {
            return bcrypt.compare(password, this.password);
        },
        addCareer(careerId) {
            this.appliedForPositions.push(careerId._id);
            this.save();
        },
        checkCareer(careerId) {
            return this.appliedForPositions.includes(careerId._id);
        }
    };

    userSchema.pre('save', function (next) {

        if (!this.isModified('password')) {
            next();
            return;
        }
        bcrypt.genSalt(saltRounds, (err, salt) => {
            if (err) {
                next(err);
                return;
            }

            bcrypt.hash(this.password, salt, (err, hash) => {
                if (err) {
                    next(err);
                    return;
                }
                this.password = hash;
                next();
            })
        })
    })

    return Model('User', userSchema);
}