// responseR.js
function sendSuccessResponseR(res, data) {
    res.status(200).json({ success: true, data });
}

function sendErrorResponseR(res, message, statusCode = 500) {
    res.status(statusCode).json({ success: false, error: message });
}

module.exports = {
    sendSuccessResponseR,
    sendErrorResponseR,
};
