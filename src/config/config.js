const config = {
    // Секрет JWT из ENV, fallback для локальной разработки
    secret: process.env.JWT_SECRET || '23rfewwef2f3deASFf9iwgefjqifdWA',

    // Стандартная переменная для определения окружения
    env: process.env.NODE_ENV || 'development',

    // Render динамически назначает порт. Без process.env.PORT сервер не поднимется
    port: process.env.PORT || 3000,

    db: {
        // В облаке здесь будет полная строка подключения MongoDB Atlas
        // Локально fallback на твой старый localhost
        dbUrl: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017',
        dbName: process.env.DB_NAME || 'freelancers'
    },

    orderStatuses: {
        new: 'new',
        confirmed: 'confirmed',
        success: 'success',
        canceled: 'canceled',
    },

    freelancerLevels: {
        junior: 'junior',
        middle: 'middle',
        senior: 'senior',
    },

    freelancerAvatarsPath: '/images/freelancers/avatars/',
    defaultFreelancerAvatar: '/images/freelancers/avatar-stub.png',
};

module.exports = config;