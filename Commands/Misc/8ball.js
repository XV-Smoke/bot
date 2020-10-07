const Discord = require("discord.js")

let responces = [
    'Yeah.',
    'Of Course!',
    'Nope.',
    'Maybe.',
    'One day...',
    'Don\'t see that happening!',
    'Highly unlikely.',
    'I have no idea.',
    "It is decidedly so",
    "Without a doubt",
    "Yes, definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
    "That is a resounding no",
    "It is not looking likely",
    "Too hard to tell",
    "It is quite possible",
    "Definitely",
    'Are you kidding?!',
    'Ask again',
    'Better not tell you now',
    'Definitely... not',
    'Dont bet on it',
    'Doubtful',
    'For sure',
    'Forget about it',
    'Hah!',
    'Hells no',
    'In due time',
    'Indubitably!',
    'It is certain',
    'It is so',
    'Leaning towards no',
    'Look deep in your heart and you will see the answer.',
    'Most definitely',
    'Most likely',
    'My sources say yes',
    "That's a tough one",
    "That's like totally a yes. Duh!",
    'The answer might not be not no',
    'The answer to that isnt pretty',
    'The heavens point to yes',
    'Yesterday it would have been a yes, but today its a yep',
    'You will have to wait',
    ':thinking:',
]

module.exports = (client, message, args, con, prefix) => {

    const question = args.join(" ");
    let fetched = responces[Math.floor(Math.random() * responces.length)];

    if (!args[0]) {
        let embed = new Discord.RichEmbed()
            .setTitle("Error Performing Command")
            .setColor("0xF00000")
            .addField("Reason", "Missing Argument")
            .addField("Usage", `${prefix}8ball <question>`, true)
            .addField("Example", `${prefix}8ball Am I going to die tonight?`, true)
        message.channel.send(embed);
    } else {
        let embed = new Discord.RichEmbed()
            .setColor("0x0AA0A0")
            .addField("Question", `:question: ${question}`)
            .addField("Answer", `:8ball: ${fetched}`)
        message.channel.send(embed);
    }
}