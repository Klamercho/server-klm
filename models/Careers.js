module.exports = (mongoose) => {

    const { Schema, model: Model } = mongoose;
    const { String, Array} = Schema.Types;

    const careersSchema = new Schema({

        jobName: {
            type: String,
            required: true
        },
        roleRequirements: {
            type: Array,
            required: true
        },
        requiredSkills: {
            type: Array,
            required: true
        },
        location: {
            type: String,
            required: true,
            maxlength: 20
        }
    });

    return Model('Careers', careersSchema);
}