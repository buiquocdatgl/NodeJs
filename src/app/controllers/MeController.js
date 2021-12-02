const Course = require('../models/Course')
const {mutipleMongooseToObject} = require('../../util/mongoose')

class MeController {
  

  //[GET] /me/stored/courses
  storedCourses(req, res, next) {
    
    //Chỗ này dùng promise.all vi nếu không dùng tách ra riêng function nó sẽ chạy cùng một lúc vào không truyền deletedCount xuống đươc
    Promise.all([Course.find({}),Course.countDocumentsDeleted()])
        .then(([courses, deletedCount]) => 
          res.render('me/stored-courses',{
            deletedCount,
            courses: mutipleMongooseToObject(courses),
          })
        )
        .catch(next)
  }

  //[GET] /me/trash/courses
  trashCourses(req, res, next){
    Course.findDeleted({})
      .then(courses => res.render('me/trash-courses',{
        courses: mutipleMongooseToObject(courses)
      }))
      .catch(next)
  }

}

module.exports = new MeController();
