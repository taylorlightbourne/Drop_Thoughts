const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3005;
const es6Renderer = require("express-es6-template-engine");
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const SUPABASE_KEY = process.env.SUPABASE_KEY

const { createClient } = require("@supabase/supabase-js");

const url = "https://bmfrpwptdmmebjwjsfcj.supabase.co";

export const supabase =  createClient(url,SUPABASE_KEY);


app.post('/signup', async (req, res) => {
  console.log(req)
  const { user, session, error } = await supabase.auth.signUp({
  username: req.body.username,
  email: req.body.email,
  password: req.body.password,
  })
  e.preventDefault();
  res.redirect('/login')
});

app.post('/logs', async (req, res) => {
  // console.log(req)
  const { user, session, error } = await supabase.auth.signIn({
  password: req.body.password,
  email: req.body.email,
  })
  if (user){
    res.status(200).redirect('/');
  } else {
    res.status(400).redirect('/login')
  }

});
