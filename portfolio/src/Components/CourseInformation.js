import React, {useState} from "react";

export default class CourseInformation {

    courseTitle;
    courseDescription;
    completionDate;
    courseImages;
    projectURL;
    constructor(title, description, date, images, projectDestination) {
        this.courseTitle = title;
        this.courseDescription = description;
        this.completionDate = date;
        this.courseImages = images;
        this.projectURL = projectDestination;
    }
}