import { EventEmitter } from "events";
import {promises as fs, existsSync} from "fs";
import path from "path";


export enum LoggerEvents {
    LOG = 'log',
    ERROR = 'error',
    ALERT = 'alert'
}

enum loggerFiles {
    LOG = 'eventLog.txt',
    ERROR = 'eventError.txt',
    ALERT = 'eventAlert.txt'
}

const dirPath = path.join('logs');

class Logger extends EventEmitter {
    public static async baseLogger(message: string, event: LoggerEvents, dirName: string) {
        const dateTime = new Date();
        const logMessage = `[${event.toLocaleUpperCase()}]\t${dateTime.toLocaleString()}\t${message}\n`
        try {
            if (!existsSync(dirPath)) {
                await fs.mkdir(dirPath)
            }
            await fs.appendFile(path.join(dirPath, dirName), logMessage);
        } catch (error) {
            console.error('error when try to log aplication\n', error);
        }
    }

    public static async log(message: string) {
        Logger.baseLogger(message, LoggerEvents.LOG, loggerFiles.LOG)
    }

    public static error(message: string, errorCode: number) {
        Logger.baseLogger(`${errorCode} - ${message}`, LoggerEvents.ERROR, loggerFiles.ERROR)
    }

    public static alert(message: string) {
        Logger.baseLogger(`${message}`, LoggerEvents.ALERT, loggerFiles.ALERT)
    }
};

const logger = new Logger();

logger.on(LoggerEvents.LOG, Logger.log);
logger.on(LoggerEvents.ERROR, Logger.error);
logger.on(LoggerEvents.ALERT, Logger.alert);

export default logger;

