const { Quote } = require("../models");
const axios = require("axios");

const getUrl = async (req, res) => {
  try {
    const addData = await axios({
      url: "https://api.kanye.rest/",
      method: "post",
    });
    const response = await axios({
      url: "https://api.kanye.rest/",
      method: "get",
    });
    res.status(200).json(addData.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getQuote = async (req, res) => {
  try {
    const result = await Quote.findAll();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

const createQuote = async (req, res) => {
  try {
    const { quote, favorites } = req.body;
    const result = await Quote.create({ quote, favorites });
    res.status(201).json({ result });
  } catch (error) {
    console.log(error);
  }
};

const updateQuote = async (req, res) => {
  try {
    const { quote, favorites } = req.body;
    const { id } = req.params;

    const findQuote = await Quote.findByPk(id);
    if (findQuote) {
      const result = await Quote.update(
        { quote, favorites },
        { where: { id }, returning: true }
      );
      res.status(200).json({ result: result[1][0] });
    } else {
      res.status(404).json({ message: `Quite id ${id} not found` });
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteQuote = async (req, res) => {
  try {
    const { id } = req.params;
    const findQuote = await Quote.findByPk(id);

    if (!findQuote) {
      throw { name: "Bad Request" };
    }
    const deleteQuote = await Quote.destroy({ where: { id: id } });
    res.status(200).json(deleteQuote);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getUrl, getQuote, createQuote, updateQuote, deleteQuote };
