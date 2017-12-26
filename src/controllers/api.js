import sequelize from '../lib/sequelize';
import Sequelize from 'sequelize';

const bookLibrary = sequelize.define('moa_lib_books', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  author: {
    type: Sequelize.TEXT,
  },
  author_info: {
    type: Sequelize.STRING,
  },
  binding: {
    type: Sequelize.STRING,
  },
  image: {
    type: Sequelize.STRING,
  },
  isbn13: {
    type: Sequelize.STRING,
  },
  pages: {
    type: Sequelize.STRING,
  },
  price: {
    type: Sequelize.STRING,
  },
  pubdate: {
    type: Sequelize.STRING,
  },
  publisher: {
    type: Sequelize.STRING,
  },
  subtitle: {
    type: Sequelize.STRING,
  },
  summary: {
    type: Sequelize.TEXT,
  },
  title: {
    type: Sequelize.STRING,
  },
  company_id: {
    type: Sequelize.STRING,
  },
  enabled: {
    type: Sequelize.STRING,
  },
  catalog: {
    type: Sequelize.STRING,
  },
  qty: {
    type: Sequelize.INTEGER,
  }
}, {
  freezeTableName: true,
  timestamps: false
})

let query = (sql) => {
  return sequelize.query(sql, {
    model: bookLibrary
  });
};

export let Get = async(ctx) => {

  // let book = await bookLibrary.findOne();
  // let book = await sequelize.query(`select author,id from moa_lib_books where author='jinzhi.he'`, {
  //   model: bookLibrary
  // });

  let book = await query(`select * from moa_lib_books`);
  ctx.body = {
    result: book
  }
}

export let Post = async(ctx) => {
  ctx.body = {
    result: 'post',
    name: ctx.params.name,
    para: ctx.request.body
  }
}

export let Put = (ctx) => {
  ctx.body = {
    result: 'put',
    name: ctx.params.name,
    para: ctx.request.body
  }
}

export let Delect = (ctx) => {
  ctx.body = {
    result: 'delect',
    name: ctx.params.name,
    para: ctx.request.body
  }
}