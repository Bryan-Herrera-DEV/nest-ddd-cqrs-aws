import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from "@nestjs/common";

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    const message = exception.message;

    if (exception instanceof HttpException) {
      status = exception.getStatus();
    }

    response.status(status).json({
      statusCode: status,
      message: message,
      data: null,
    });
  }
}
