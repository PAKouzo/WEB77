import mongoose from 'mongoose';
import UsersModel from './users';

const profileSchema = new mongoose.Schema({
    profileID: UsersModel.id,
    personalInf: {
        fullname: String,
        DateOfBirth: Date,
        placeOfBirth: String,
        nationality: String,
        education: String
    },
    workInf: {
        skills: String,
        projects: [{
            projectName: String,
            content: String,
            role: String,
            startDate: Date,
            endDate: Date
        }],
        workHistory: [{
            startDate: Date,
            endDate: Date,
            companyName: String,
            role: String
        }]
    },
    OthersInf: {
        hobbies: [String],
        personalGoals: [String]
    }
});

const ProfilesModel = mongoose.model('posts', profileSchema);
export default ProfilesModel;