let courses;

export default class CoursesDAO {
  /**
   *
   * @param {*} conn The connection to the MongoDB database
   * @returns Nothing. But establishes a connection to the MongoDB database upon success or prints an error if connection cannot be made.
   */
  static async injectDB(conn) {
    if (courses) {
      return;
    }
    try {
      courses = await conn.db(process.env.COURSES_NS).collection("courses");
    } catch (e) {
      console.error(
        `Unable to establish a connection handle in coursesDAO: ${e}`
      );
    }
  }

  /**
   *
   * @param {*} filters An object with properties subject, level, session, and year
   * @returns A Promise resolving to an object containing course data for the specified course in all fields are filled.
   *          Promise resolves to an empty array if filters are not set or if course does not exist
   *          Promise rejects with an error if querying fails or internal server error
   */

  static getCourseDataByParams(filters) {
    return new Promise((resolve, reject) => {
      if (
        filters &&
        filters.hasOwnProperty("subject") &&
        filters.hasOwnProperty("level") &&
        filters.hasOwnProperty("session") &&
        filters.hasOwnProperty("year")
      ) {
        let query = {
          $and: [
            {
              Subject: { $eq: filters.subject },
            },
            {
              Level: { $eq: filters.level },
            },
            {
              Session: { $eq: filters.session },
            },
            {
              Year: { $eq: filters.year },
            },
          ],
        };
        courses
          .find(query)
          .toArray()
          .then(
            (result) => {
              resolve(result[0]);
            },
            (err) => {
              reject(err);
            }
          )
          .catch((err) => reject(err));
      } else {
        resolve([]);
      }
    });
  }

  /**
   *
   * @param {*} year An integer describing the year to get all sessions for.
   * @returns A Promise resolving to an array of unique Sessions names as strings in specified year. Ex: ["May", "Nov"]
   *          Promise resolves to an empty array if year is not set or if session data isn't found
   *          Promise rejects with an error if querying fails or internal server error
   */
  static getSessionsByYear(year) {
    return new Promise((resolve, reject) => {
      if (year) {
        const pipeline = [
          { $match: { Year: { $eq: year } } },
          { $group: { _id: "$Session" } },
        ];
        courses
          .aggregate(pipeline)
          .toArray()
          .then(
            (result) => {
              let res = [];
              result.forEach((course) => {
                res.push(course._id);
              });
              resolve(res.sort());
            },
            (err) => {
              reject(err);
            }
          )
          .catch((err) => reject(err));
      } else {
        reject([]);
      }
    });
  }

  /**
   *
   * @param {*} session A string describing the session to get all the subjects for
   * @param {*} year An integer describing the year to get all the subjects for
   * @returns A Promise resolving to an object containing course data for the specified course in all fields are filled
   *          Promise resolves to an empty array if filters are not set or if course does not exist
   *          Promise rejects with an error if querying fails or internal server error
   */

  static getSubjectsBySessionYear(session, year) {
    return new Promise((resolve, reject) => {
      if (session && year) {
        const pipeline = [
          {
            $match: {
              $and: [
                {
                  Session: { $eq: session },
                },
                {
                  Year: { $eq: parseInt(year) },
                },
              ],
            },
          },
          { $group: { _id: "$Subject" } },
        ];

        courses
          .aggregate(pipeline)
          .toArray()
          .then(
            (result) => {
              console.log(result);
              let res = [];
              result.forEach((course) => {
                if (course._id) res.push(course._id);
              });
              resolve(res.sort());
            },
            (err) => {
              reject(err);
            }
          )
          .catch((err) => reject(err));
      } else {
        resolve([]);
      }
    });
  }

  /**
   *
   * @param {*} session A string describing the session to get all the levels for
   * @param {*} year An integer describing the year to get all the levels for
   * @param {*} subject_name A string describing the subject name to get all the levels for
   * @returns A Promise resolving to an array containing strings describing the levels for the specified specified session, year, and subject name
   *          Promise resolves to an empty array if session, year, or subject_name are not set or if data does not exist
   *          Promise rejects with an error if querying fails or internal server error
   */
  static getLevelsBySessionYearSubjectName(session, year, subject_name) {
    return new Promise((resolve, reject) => {
      if (session && year && subject_name) {
        const pipeline = [
          {
            $match: {
              $and: [
                {
                  Session: { $eq: session },
                },
                {
                  Year: { $eq: parseInt(year) },
                },
                {
                  Subject: { $eq: subject_name },
                },
              ],
            },
          },
          { $group: { _id: "$Level" } },
        ];

        courses
          .aggregate(pipeline)
          .toArray()
          .then(
            (res) => {
              let result = [];
              res.forEach((level) => {
                result.push(level._id);
              });
              console.log(result);
              resolve(result.sort());
            },
            (rej) => {
              reject(rej);
            }
          )
          .catch((err) => console.error(err));
      } else {
        resolve([]);
      }
    });
  }
}
