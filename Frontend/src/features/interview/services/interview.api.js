import { api } from "../../auth/services/auth.api";

function getApiErrorMessage(err, fallbackMessage) {
    return err?.response?.data?.message
        || err?.message
        || fallbackMessage
}


/**
 * @description Service to generate interview report based on user self description, resume and job description.
 */
export const generateInterviewReport = async ({ jobDescription, selfDescription, resumeFile }) => {

    const formData = new FormData()
    formData.append("jobDescription", jobDescription)
    formData.append("selfDescription", selfDescription)
    formData.append("resume", resumeFile)

    try {
        const response = await api.post("/api/interview/", formData)

        return response.data
    } catch (err) {
        throw new Error(getApiErrorMessage(err, "Failed to generate interview strategy"))
    }

}


/**
 * @description Service to get interview report by interviewId.
 */
export const getInterviewReportById = async (interviewId) => {
    try {
        const response = await api.get(`/api/interview/report/${interviewId}`)

        return response.data
    } catch (err) {
        throw new Error(getApiErrorMessage(err, "Failed to fetch interview report"))
    }
}


/**
 * @description Service to get all interview reports of logged in user.
 */
export const getAllInterviewReports = async () => {
    try {
        const response = await api.get("/api/interview/")

        return response.data
    } catch (err) {
        throw new Error(getApiErrorMessage(err, "Failed to fetch interview reports"))
    }
}


/**
 * @description Service to generate resume pdf based on user self description, resume content and job description.
 */
export const generateResumePdf = async ({ interviewReportId }) => {
    try {
        const response = await api.post(`/api/interview/resume/pdf/${interviewReportId}`, null, {
            responseType: "blob"
        })

        return response.data
    } catch (err) {
        throw new Error(getApiErrorMessage(err, "Failed to generate resume PDF"))
    }
}
