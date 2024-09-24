const responseData = (res, message, status, content) =>
  res.status(status).json({
    message,
    status,
    data: content,
    date: new Date(),
  });

module.exports = responseData;
