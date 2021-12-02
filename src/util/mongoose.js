module.exports ={
    //Xử lý arrary
    mutipleMongooseToObject: function(mongooses){
        return mongooses.map(mongoose => mongoose.toObject());
    },

    mongooseToObject: function(mongoose){
        return mongoose ? mongoose.toObject() :mongoose;
    }
};
