const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready',  () => {
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'); 
  console.log('CREATED BY : PITAR HIX');
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log(`Logged in as  * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log('⚙            https://discord.gg/2yCdFZ | سيرفر الدعم');
  console.log('⚙            PITAR : ibarmoda');
client.user.setStatus("dnd");
});
                                                                                                                                                                                              var prefix = "!";

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command === "Bb") {
    let numArray = args.map(n=> parseInt(n));
    let total = numArray.reduce( (p, c) => p+c);

    message.channel.sendMessage(total).catch(console.error);
  }
  

  });

// playing
client.on('ready', () => {
                                                                                                                                                                                                                                                                              client.user.setGame(`buy ii7MoDxDii`,'https://www.twitch.tv/v5bz');
});


client.on("message", msg => {
           var prefix = "";
  if(msg.content.startsWith (prefix + "معلوماتي")) {
    if(!msg.channel.guild) return msg.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
      const embed = new Discord.RichEmbed();
  embed.addField(":cloud_tornado:  الاسم", `**[ ${msg.author.username}#${msg.author.discriminator} ]**`, true)
          .addField(":id:  الايدي", `**[ ${msg.author.id} ]**`, true)
          .setColor("RANDOM")
          .setFooter(msg.author.username , msg.author.avatarURL)
          .setThumbnail(`${msg.author.avatarURL}`)
          .setTimestamp()
          .setURL(`${msg.author.avatarURL}`)
          .addField(':spy:  الحالة', `**[ ${msg.author.presence.status.toUpperCase()} ]**`, true)
          .addField(':satellite_orbital:   يلعب', `**[ ${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name} ]**`, true)
          .addField(':military_medal:  الرتب', `**[ ${msg.member.roles.filter(r => r.name).size} ]**`, true)
          .addField(':robot:  هل هو بوت', `**[ ${msg.author.bot.toString().toUpperCase()} ]**`, true);
      msg.channel.send({embed: embed})
  }
});



client.on('message', message => {
     if (message.content === "$$-help") {
message.author.send("اشتراك برميوم للبوت العربي" + `  **
╭━━━╮╱╱╱╱╭╮╱╱╱╱╱╱╱╱╭━━╮╱╱╱╭╮╱╭━━━╮
┃╭━╮┃╱╱╱╱┃┃╱╱╱╱╱╱╱╱┃╭╮┃╱╱╭╯╰╮┃╭━╮┃
┃┃╱┃┣━┳━━┫╰━┳┳━━┳━━┫╰╯╰┳━┻╮╭╯┃╰━╯┣━┳━━┳╮╭┳┳╮╭┳╮╭╮
┃╰━╯┃╭┫╭╮┃╭╮┣┫╭━┫╭╮┃╭━╮┃╭╮┃┃╱┃╭━━┫╭┫┃━┫╰╯┣┫┃┃┃╰╯┃
┃╭━╮┃┃┃╭╮┃╰╯┃┃╰━┫╰╯┃╰━╯┃╰╯┃╰╮┃┃╱╱┃┃┃┃━┫┃┃┃┃╰╯┃┃┃┃
╰╯╱╰┻╯╰╯╰┻━━┻┻━━┻━━┻━━━┻━━┻━╯╰╯╱╱╰╯╰━━┻┻┻┻┻━━┻┻┻╯
تم الاشتراك في هاذا البوت لمدة شهر
تاريخ انتهاء صلاحية البوت البرميوم : 	23/9/2018
رابط اضافة البوت العربي 
[https://discordapp.com/oauth2/authorize?client_id=414962445325697037&scope=bot&permissions=2146958591]
موقع البوت العربي : 
[https://arabicobot.wixsite.com/arabicobot]
مبرمج البوت العربي [ＰＩＴＡＲ ＩＳ ＨＥＲＥ#5333]
**`);
    }
});


client.on('message', message => {
     if (message.content === "$help") {
message.author.send("" + `  **
+ping             | سرعة الأتصال
معلوماتي | معلومــات عــن حســابــك
صورتي        | صورتك في الدسكورد
تنبيه هام : كود الكرديت قيد التطوير ما تقدر تعطي احد كرديت هو قيد التطوير
"اوامر السيرفرات" 
السيرفر                 | معلومات عن السيرفر
مسح                  | لحذف الرسائل
صناعة الوان          | لصناعة 200 لون
طرد                   | لطرد الشخص
حظر                    | لتبنيد الشخص
اسكت                   | لاعطاء العضو ميوت
فك سكوت               | لفك الميوت عن العضو
تقفيل شات            | لتقفيل الشات
فتح شات          | لفتح الشات
صناعةروم ك                      | لصناعة روم كتابي
صناعة روم ص                     | لصناعة روم صوتي
رومات                  | يطلع لك اسامي وارقام الرومات
"اوامر البوت" 
+bot               | عدد السيرفرات التي تستخدم البوت
+support           | لدخول سيرفر المساعدة الخاص بالبوت
+contact           | لارسال رسالة الى صاحب البوت
"استضافات"
استضافة اللوق   : سوي روم باسم console
"الدعم الفني"
:gear:          https://discord.gg/ZPzcRfu    | سيرفر الدعم 
:gear:            https://arabicobot.wixsite.com/arabicobot  | موقع البوت
**`);
    }
});


// -ping
   client.on('message', message => {
     if (message.content === "+ping") {
      const embed = new Discord.RichEmbed()
 
  .setColor("#FF0000")
  .addField('``سرعة أتصال الــبوت`` ' , `${Date.now() - message.createdTimestamp}` + ' ms`')

  message.channel.sendEmbed(embed);
    }
});


client.on('message', function(msg) {
         var prefix = "$$-"
    if(msg.content.startsWith (prefix  + 'السيرفر')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField(':globe_with_meridians:** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField(':medal:** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField(':red_circle:**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField(':large_blue_circle:**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField(':pencil:**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField(':microphone:**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField(':crown:**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField(':id:**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
      .addField(':date:**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });



   client.on('message', message => {
     if (message.content === "+help") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
               .setFooter(`💙 ↪ World ↩ 💙`, 'https://cdn.discordapp.com/attachments/478146223589818409/480808730754023435/PicsArt_08-18-05.20.46.png')
  .setColor("#9B59B6")
  .addField("تم ارسال الاوامر في الخاص + تاكد انك فاتح الخاص :]")

     
     
  message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
    if(message.content.startsWith(prefix + 'صورتي')) {
        var mentionned = message.mentions.users.first();
          var getvalueof;
          var bot;
          if(mentionned) {
            getvalueof = mentionned;
          } else {
            getvalueof = message.author;
          }
          let avatar = new Discord.RichEmbed()
          .setTitle(`${getvalueof.username}\'s Avatar`)
          .setImage(`${getvalueof.avatarURL}`);
          message.channel.sendEmbed(avatar);
      }
});
   

client.on("message", message => {
    var prefix = "";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "مسح")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **ليس لديك صلاحيات**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | تــم",
        color: 0x06DF00,
        description: "تم مسح الرسائل بنجاح",
        footer: {
          text: "💙 ↪ World ↩ 💙"
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
});


client.on('message', message => {
    if(message.content.includes('discord.gg')){ 
                                            if(!message.channel.guild) return message.reply('** advertising me on DM ? :thinking:   **');
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`**ممنوع نشر سيرفرات ديسكورد :x:**`)
    }
}
});


client.on('message' , message => {
    if (message.content === "+support") {
        if(!message.channel.guild) return message.reply('This Command is Only For Servers');
     const embed = new Discord.RichEmbed()
 .setColor("RANDOM")
 .setThumbnail(client.user.avatarURL)
 .setAuthor(message.author.username, message.author.avatarURL)
 .setTitle('اظغط هنا لدخول سيرفر الدعم الفني')
 .setURL('https://discord.gg/ZPzcRfu')
  message.channel.sendEmbed(embed);
   }
});


client.on('message', function(message) {
if(!message.channel.guild) return;
if(message.content === 'صناعة الوان') {
if(message.member.hasPermission('MANAGE_ROLES')) {
setInterval(function(){})
message.channel.send('يتم انشاء 200 لون انتضر | ▶️')
}else{
message.channel.send('ما معاك البرمشن المطلوب |❌🚫')
}
}
});

client.on('message', message=>{
if (message.content === 'صناعة الوان'){
if(!message.channel.guild) return;
if (message.member.hasPermission('MANAGE_ROLES')){
setInterval(function(){})
let count = 0;
let ecount = 0;
for(let x = 1; x < 200; x++){
message.guild.createRole({name:x,
color: 'RANDOM'})
}
}
}
});


client.on('message', message => {
    if(message.content === "+bot") {
        const embed = new Discord.RichEmbed()
        .setColor("#00FFFF")
        .setDescription(`**السيرفرات**?? **__${client.guilds.size}__**
**المستخدمين**?? **__${client.users.size}__**
**الرومات**?? **__${client.channels.size}__** `)
               message.channel.sendEmbed(embed);
           }
});


client.on("message", (message) => {
if (message.content.startsWith("صناعة روم ك")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'text');
message.channel.sendMessage('تـم إنـشاء روم كـتابـي')

}
});


client.on("message", (message) => {
if (message.content.startsWith("صناعة روم ص")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'voice');
    message.channel.sendMessage('تـم إنـشاء روم صـوتي')
    
}
});


//اوامر اداريه//
client.on("message", message => {
  if (message.author.bot) return;
  
  let command = message.content.split(" ")[0];
  
  if (command === "اسكت") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'console');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' + لازم تشيل خاصية Send Message **").catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('** يجب عليك منشنت شخص اولاً**').catch(console.error);
  
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('الأستعمال:', 'اسكت/احكي')
    .addField('تم ميوت:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
   
   if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);
 
  if (message.guild.member(user).roles.has(muteRole.id)) {
return message.reply("**:white_check_mark: .. تم اعطاء العضو ميوت**").catch(console.error);
} else {
    message.guild.member(user).addRole(muteRole).then(() => {
return message.reply("**:white_check_mark: .. تم اعطاء العضو ميوت كتابي**").catch(console.error);
});
  }

};

});



   client.on("message", message => {
  if (message.author.bot) return;
  
  let command = message.content.split(" ")[0];
  
  if (command === "فك سكوت") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'console');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** لا يوجد لديك رتبه الميوت 'Muted' + لازم تشيل خاصية Send Message **").catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('** يجب عليك منشنت شخص اولاً**').catch(console.error);
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('الأستعمال:', 'اسكت/احكي')
    .addField('تم فك الميوت عن:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);

  if (message.guild.member(user).removeRole(muteRole.id)) {
return message.reply("**:white_check_mark: .. تم فك الميوت عن الشخص **").catch(console.error);
} else {
    message.guild.member(user).removeRole(muteRole).then(() => {
return message.reply("**:white_check_mark: .. تم فك الميوت عن الشخص **").catch(console.error);
});
  }

};

});


client.on('message', message => {

       if(message.content === prefix + "تقفيل شات") {
                           if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false

              }).then(() => {
                  message.reply("**__تم تقفيل الشات__ :white_check_mark: **")
              });
                }
//viper
    if(message.content === prefix + "فتح شات") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: true

              }).then(() => {
                  message.reply("**__تم فتح الشات__:white_check_mark:**")
              });
                }
                
         
       
});


var prefix = ""
client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "طرد") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**انت ممعك برمشن Kick Members >:(**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**انا ممعي برمشن Kick Members :(**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**المطرود :**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**من قبل :**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**السبب :**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});
 

 
var prefix = ""
client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "حظر") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**انت ممعك برمشن Ban Members >:(**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**انا ممعي برمشن Ban Members :(**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**المبند :**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**من قبل :**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**السبب :**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});


var prefix = "+"
client.on('message', message => {

  if (message.content.startsWith(prefix + "contact")) {
  if (!message.channel.guild) return;
  let args = message.content.split(" ").slice(1).join(' ');
  client.users.get("450380129122910210").send(
      "\n" + "" + "● السيرفر :" + "" +
      "\n" + "" + "» " + message.guild.name + "" +
      "\n" + "" + " ● المرسل : " + "" +
      "\n" + "" + "» " + message.author.tag + "" +
      "\n" + "" + " ● الرسالة : " + "" +
      "\n" + "" + args + "")
  }
  });
  
  
  client.on('message', message => {
    if (message.content === "رومات") {
        if (message.author.bot) return
                      if (!message.guild) return;

        var channels = message.guild.channels.map(channels => `${channels.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField(`${message.guild.name}`,`**الرومات الموجودة بالسيرفر:white_check_mark:**`)
        .addField(':arrow_down: عدد الرومات. :heavy_check_mark:',`** ${message.guild.channels.size}**`)
        
.addField(':arrow_down:اسامي الرومات. :heavy_check_mark::',`**[${channels}]**`)
        message.channel.sendEmbed(embed);
    }
});


client.on('message' , message => {
    if (message.content === "+website") {
        if(!message.channel.guild) return message.reply('This Command is Only For Servers');
     const embed = new Discord.RichEmbed()
 .setColor("RANDOM")
 .setThumbnail(client.user.avatarURL)
 .setAuthor(message.author.username, message.author.avatarURL)
 .setTitle('اظغط هنا لدخول موقع البوت العربي')
 .setURL('https://arabicobot.wixsite.com/arabicobot')
  message.channel.sendEmbed(embed);
   }
});


client.on("roleCreate",  rc => {
const channel = rd.guild.channels.find("name", "console")
if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(` + Role Created`)
  .setDescription(`A role Has been created \n Name : ${rc.name}`)
  .setColor(`RANDOM`)
channel.sendEmbed(embed)
}
});

client.on("roleDelete",  rd => {
const channel = rd.guild.channels.find("name", "console")
if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(` - Role Delete`)
  .setDescription(`A role has been deleted \n Name : ${rd.name}`)
  .setColor(`RANDOM`)
channel.sendEmbed(embed)
}
});

client.on("guildUpdate",  rc => {
const channel = rd.guild.channels.find("name", "console")
if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(`+ guild updated`)
  .setDescription(`A guild has been updated \n Name : ${rc.name}`)
  .setColor(`RANDOM`)
channel.sendEmbed(embed)
}
});

client.on("memberKick",  rd => {
const channel = rd.guild.channels.find("name", "console")
if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(` Member Kicked -`)
  .setDescription(`A member has been kicked by \n Name : ${rd.name}`)
  .setColor(`RANDOM`)
channel.sendEmbed(embed)
}
});

client.on("memberPrune",  rc => {
const channel = rd.guild.channels.find("name", "console")
if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(`Member Pruned`)
  .setDescription(`A member has been pruned \n Name : ${rc.name}`)
  .setColor(`RANDOM`)
channel.sendEmbed(embed)
}
});

client.on("memberUpdate",  rd => {
const channel = rd.guild.channels.find("name", "console")
if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(` Member Updated`)
  .setDescription(`A member has been updated to \n Name : ${rd.name}`)
  .setColor(`RANDOM`)
channel.sendEmbed(embed)
}
});

client.on("memberRoleUpdate",  rc => {
const channel = rd.guild.channels.find("name", "console")
if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(` Updated Roles`)
  .setDescription(`Updated Roles to \n Name : ${rc.name}`)
  .setColor(`RANDOM`)
channel.sendEmbed(embed)
}
});

client.on("roleUpdate",  rd => {
const channel = rd.guild.channels.find("name", "console")
if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(`Role Updated`)
  .setDescription(`A role has been updated to \n Name : ${rd.name}`)
  .setColor(`RANDOM`)
channel.sendEmbed(embed)
}
});

client.on("inviteCreate",  rd => {
const channel = rd.guild.channels.find("name", "console")
if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(`Invite Link Created +`)
  .setDescription(`A Invite Link has been Created \n Name : ${rd.name}`)
  .setColor(`RANDOM`)
channel.sendEmbed(embed)
}
});

client.on("inviteUpdate",  rd => {
const channel = rd.guild.channels.find("name", "console")
if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(`Role Updated`)
  .setDescription(`A role has been updated to \n Name : ${rd.name}`)
  .setColor(`RANDOM`)
channel.sendEmbed(embed)
}
});

client.on("inviteDelete",  rd => {
const channel = rd.guild.channels.find("name", "console")
if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(`Invite Link Deleted -`)
  .setDescription(`A invite link deleted \n Name : ${rd.name}`)
  .setColor(`RANDOM`)
channel.sendEmbed(embed)
}
});

client.on("emojiUpdate",  rd => {
const channel = rd.guild.channels.find("name", "console")
if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(`Emoji Updated`)
  .setDescription(`A emoji has been updated to \n Name : ${rd.name}`)
  .setColor(`RANDOM`)
channel.sendEmbed(embed)
}
});

client.on("emojiDelete",  rd => {
const channel = rd.guild.channels.find("name", "console")
if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(`Emoji Deleted -`)
  .setDescription(`A emoji has been deleted \n Name : ${rd.name}`)
  .setColor(`RANDOM`)
channel.sendEmbed(embed)
}
});

client.on("emojiCreate",  rd => {
const channel = rd.guild.channels.find("name", "console")
if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(`Emoji Created + `)
  .setDescription(`A emoji has been created \n Name : ${rd.name}`)
  .setColor(`RANDOM`)
channel.sendEmbed(embed)
}
});

client.on("messageDelete",  rd => {
const channel = rd.guild.channels.find("name", "console")
if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(`Message Deleted -`)
  .setDescription(`A Message has been deleted \n Name : ${rd.name}`)
  .setColor(`RANDOM`)
channel.sendEmbed(embed)
}
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
