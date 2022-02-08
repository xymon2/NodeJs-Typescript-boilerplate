import dotenv from 'dotenv';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV === 'development') {
    try {
        dotenv.config({ path: '.env.dev' });
    } catch (err) {}
}
