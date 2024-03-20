import mongoose from 'mongoose';

export default new mongoose.Schema(
    {
        username: { type: String, required: true },
        title: { type: String, required: true },
        templateContext: { type: String, required: true },
        collectionName: { type: String, required: true, unique: true },
        buttonIcon: { type: String },
        sampleQuetions: []
    },
    { timestamps: true }
);

