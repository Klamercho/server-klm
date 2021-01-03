module.exports = (mongoose) => {

    const { Schema, model: Model } = mongoose;
    const { String, Array} = Schema.Types;

    const newsSchema = new Schema({

        newsTitle: {
            type: String,
            required: true
        },
        newsPictureUrl: {
            type: Array,
            required: true
        },
        newsDescription: {
            type: Array,
            required: true,
            maxlength: 400

        },
        newsMainText: {
            type: String,
            required: true,
            maxlength: 2000
        }
    });

    return Model('News', newsSchema);
}