import CoursesDAO from "../data_access_object/coursesDAO.js";

export default class CoursesController {
  static async apiQueryCourse(req, res, next) {

    let params = req.query;
    let filters;
    let course;

    filters = {
      subject: params.subject,
      level: params.level,
      session: params.session,
      year: parseInt(params.year),
    };

    course = await CoursesDAO.getCourseDataByParams(filters);
    res.json(course);
  }

  static async getUniqueSessions(req, res, next) {
    let params = req.query;

    if (params.year !== "") {
      let sessions = await CoursesDAO.getSessionsByYear(parseInt(params.year));
      res.json(sessions);
    }
  }

  static async getUniqueSubjectNames(req, res, next) {
    let params = req.query;

    if (params.year !== "" && params.session !== "") {
      let courseNames = await CoursesDAO.getSubjectsBySessionYear(
        params.session,
        params.year
      );
      res.json(courseNames);
    }
  }

  static async getUniqueLevels(req, res, next) {
    let params = req.query;

    if (
      params.year !== "" &&
      (params.session !== "") & (params.subject_name !== "")
    ) {
      let levels = await CoursesDAO.getLevelsBySessionYearSubjectName(
        params.session,
        params.year,
        params.subject_name
      );
      res.json(levels);
    }
  }
}
