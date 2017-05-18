import fs from 'fs';
import iconv from 'iconv-lite';

const file = {};

file.read = async(ctx, next, opt, cb) => {
    try {
        fs.stat(opt.file,
            (e, stat) => {
                if (stat && stat.isFile()) {
                    fs.readFile(opt.file,
                        (e, data) => {
                            cb(e, data.toString());
                        }
                    );
                } else {
                    ctx.logger.error(e);
                }
            }
        );
    } catch (e) {
        ctx.logger.error(e);
    }
};

file.write = async(ctx, next, opt, cb) => {
    try {
        const str = iconv.encode(JSON.stringify(opt.data), 'utf-8');
        fs.writeFile(opt.file, str,
            (e) => {
                if (e) {
                    ctx.logger.error(e);
                    cb(e);
                }
            }
        );
    } catch (e) {
        ctx.logger.error(e);
    }
};

export default file;