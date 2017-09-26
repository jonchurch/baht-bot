const rp = require('request-promise').defaults({json: true})


module.exports = (controller) => {

	controller.on('convert:baht_to_usd', async (bot, message) => {
		const latest = await rp.get('https://api.fixer.io/latest?base=THB')
		const usdR = latest.rates.USD
		
		bot.reply(message, `USD: ${message.value * usdR }`)
	})
}
