module.exports = (mongoose) => {

    const { Schema, model: Model } = mongoose;
    const { String } = Schema.Types;

    const clientsSchema = new Schema({

        name: {
            type: String,
            required: true
        },
        pictureURL: {
            type: String,
            required: true,
        },
        testimony: {
            type: String,
            required: true,
            maxlength: 700
        },
        author: {
            type: String,
            required: true
        },
        authorPosition: {
            type: String,
            required: true
        }
    });

    return Model('Clients', clientsSchema);
}