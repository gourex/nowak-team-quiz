/**
 * Deployment-specific config, kept separate from quiz-data.js content.
 *
 * SUBMIT_URL: the Google Apps Script Web App URL that records each quiz
 * result (nickname + persona + timestamp) to a Google Sheet. See
 * README-recording-results.md for how to create and deploy it. Leave as
 * an empty string to disable recording (the quiz still works fully
 * without it — results just won't be saved anywhere).
 */
const QUIZ_CONFIG = {
  SUBMIT_URL: ""
};

if (typeof window !== "undefined") {
  window.QUIZ_CONFIG = QUIZ_CONFIG;
}
