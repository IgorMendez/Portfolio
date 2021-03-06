'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Projects',
    [
      {
        name: 'Online Store',
        url: 'https://github.com/IgorMendez/Trybe/tree/master/Projetos/Front-end/sd-011-project-frontend-online-store/src',
        module: 'Front-End',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        name: 'Movie Card Library Crud',
        url: 'https://github.com/IgorMendez/Trybe/tree/master/Projetos/Front-end/sd-011-project-movie-card-library-crud/src',
        module: 'Front-End',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        name: 'Movie Card Library Stateful',
        url: 'https://github.com/IgorMendez/Trybe/tree/master/Projetos/Front-end/sd-011-project-movie-cards-library-stateful/src',
        module: 'Front-End',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        name: 'Movie Card Library',
        url: 'https://github.com/IgorMendez/Trybe/tree/master/Projetos/Front-end/sd-011-project-movie-cards-library/src',
        module: 'Front-End',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        name: 'React Testing Library',
        url: 'https://github.com/IgorMendez/Trybe/tree/master/Projetos/Front-end/sd-011-project-react-testing-library/src',
        module: 'Front-End',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        name: 'Recipes App',
        url: 'https://github.com/IgorMendez/Trybe/tree/master/Projetos/Front-end/sd-011-project-recipes-app/src',
        module: 'Front-End',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        name: 'Shopping Cart',
        url: 'https://github.com/IgorMendez/Trybe/tree/master/Projetos/Front-end/sd-011-project-shopping-cart',
        module: 'Front-End',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        name: 'StarWars Planets Search',
        url: 'https://github.com/IgorMendez/Trybe/tree/master/Projetos/Front-end/sd-011-project-starwars-planets-search/src',
        module: 'Front-End',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        name: 'Trivia React Redux',
        url: 'https://github.com/IgorMendez/Trybe/tree/master/Projetos/Front-end/sd-011-project-trivia-react-redux/src',
        module: 'Front-End',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        name: 'TrybeWallet',
        url: 'https://github.com/IgorMendez/Trybe/tree/master/Projetos/Front-end/sd-011-project-trybewallet/src',
        module: 'Front-End',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        name: 'Stranger Things FrontEnd',
        url: 'https://github.com/IgorMendez/Trybe/tree/master/Projetos/Front-end/sd-011-stranger-things-frontend/src',
        module: 'Front-End',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        name: 'CookMaster',
        url: 'https://github.com/IgorMendez/Trybe/tree/master/Projetos/Back-end/sd-011-cookmaster/src',
        module: 'Back-End',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        name: 'MongoDB Aggregations',
        url: 'https://github.com/IgorMendez/Trybe/tree/master/Projetos/Back-end/sd-011-mongodb-aggregations/challenges',
        module: 'Back-End',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        name: 'MongoDB Commerce',
        url: 'https://github.com/IgorMendez/Trybe/tree/master/Projetos/Back-end/sd-011-mongodb-commerce/challenges',
        module: 'Back-End',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        name: 'MongoDB DataFlights',
        url: 'https://github.com/IgorMendez/Trybe/tree/master/Projetos/Back-end/sd-011-mongodb-dataflights/challenges',
        module: 'Back-End',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        name: 'MySQL One For All',
        url: 'https://github.com/IgorMendez/Trybe/tree/master/Projetos/Back-end/sd-011-mysql-one-for-all',
        module: 'Back-End',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        name: 'MySQL Vocabulary Booster',
        url: 'https://github.com/IgorMendez/Trybe/tree/master/Projetos/Back-end/sd-011-mysql-vocabulary-booster',
        module: 'Back-End',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        name: 'Blogs API',
        url: 'https://github.com/IgorMendez/Trybe/tree/master/Projetos/Back-end/sd-011-project-blogs-api',
        module: 'Back-End',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        name: 'Delivery App',
        url: 'https://github.com/IgorMendez/Trybe/tree/master/Projetos/Back-end/sd-011-project-delivery-app',
        module: 'Back-End',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        name: 'MySQL All For One',
        url: 'https://github.com/IgorMendez/Trybe/tree/master/Projetos/Back-end/sd-011-project-mysql-all-for-one',
        module: 'Back-End',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        name: 'Talker Manager',
        url: 'https://github.com/IgorMendez/Trybe/tree/master/Projetos/Back-end/sd-011-project-talker-manager',
        module: 'Back-End',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        name: 'WebChat',
        url: 'https://github.com/IgorMendez/Trybe/tree/master/Projetos/Back-end/sd-011-project-webchat',
        module: 'Back-End',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        name: 'Store Manager',
        url: 'https://github.com/IgorMendez/Trybe/tree/master/Projetos/Back-end/sd-011-store-manager',
        module: 'Back-End',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        name: 'Stranger Things BackEnd',
        url: 'https://github.com/IgorMendez/Trybe/tree/master/Projetos/Back-end/sd-011-stranger-things-backend/services',
        module: 'Back-End',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        name: 'Algorithms',
        url: 'https://github.com/IgorMendez/Trybe/tree/master/Projetos/Ci%C3%AAncia%20da%20Computa%C3%A7%C3%A3o/sd-011-project-algorithms/challenges',
        module: 'Ci??ncia da Computa????o',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        name: 'Job Insights',
        url: 'https://github.com/IgorMendez/Trybe/tree/master/Projetos/Ci%C3%AAncia%20da%20Computa%C3%A7%C3%A3o/sd-011-project-job-insights/src',
        module: 'Ci??ncia da Computa????o',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        name: 'Ting',
        url: 'https://github.com/IgorMendez/Trybe/tree/master/Projetos/Ci%C3%AAncia%20da%20Computa%C3%A7%C3%A3o/sd-011-project-ting',
        module: 'Ci??ncia da Computa????o',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        name: 'Restaurant Orders',
        url: 'https://github.com/IgorMendez/Trybe/tree/master/Projetos/Ci%C3%AAncia%20da%20Computa%C3%A7%C3%A3o/sd-011-restaurant-orders',
        module: 'Ci??ncia da Computa????o',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        name: 'Tech News',
        url: 'https://github.com/IgorMendez/Trybe/tree/master/Projetos/Ci%C3%AAncia%20da%20Computa%C3%A7%C3%A3o/sd-011-tech-news/tech_news',
        module: 'Ci??ncia da Computa????o',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
  ], {}),
}
