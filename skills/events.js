
module.exports = (controller) => {

	// right now we will just send an amount in integer to the bot and get back the usd conversion, easy peasy right?
	controller.hears('(.*)', 'message_received', (bot, message) => {
		if (! isNaN(message.text)) {
			message.value = message.text
			controller.trigger('convert:baht_to_usd', [bot, message])
		}

	})
}
