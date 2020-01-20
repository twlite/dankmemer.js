const base = "https://dankmemer.services/api";
const fetch = require("snekfetch");

class Dank {

    /**
     * @constructor
     * @param {string} token API token
     */

    constructor(token) {
        if (!token) throw new TypeError("Token was not provided!");
        this.token = token;
    }

    /**
     * abandon
     * @param {String} text text to generate meme
     */

    async abandon(text) {
        let data = await fetch.get(`${base}/abandon?text=${text}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * aborted
     * @param {String} avatar avatar
     */

    async aborted(avatar) {
        let data = await fetch.get(`${base}/aborted?avatar1=${avatar}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * affect
     * @param {String} avatar avatar
     */

    async affect(avatar) {
        let data = await fetch.get(`${base}/affect?avatar1=${avatar}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * airpods
     * @param {String} avatar avatar
     */

    async airpods(avatar) {
        let data = await fetch.get(`${base}/airpods?avatar1=${avatar}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * america
     * @param {String} avatar avatar
     */

    async america(avatar) {
        let data = await fetch.get(`${base}/america?avatar1=${avatar}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * armor
     * @param {String} text text
     */

    async armor(text) {
        let data = await fetch.get(`${base}/armor?text=${text}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * balloon
     * @param {String} text text
     */

    async balloon(text) {
        let data = await fetch.get(`${base}/balloon?text=${text}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * bed
     * @param {String} avatar1 avatar1
     * @param {String} avatar2 avatar2
     */

    async bed(avatar1, avatar2) {
        let data = await fetch.get(`${base}/bed?avatar1=${avatar1}&avatar2=${avatar2}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * bongocat
     * @param {String} avatar1 avatar1
     */

    async bongocat(avatar1) {
        let data = await fetch.get(`${base}/bongocat?avatar1=${avatar1}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * boo
     * @param {String} text text
     */

    async boo(text) {
        let data = await fetch.get(`${base}/boo?text=${text}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * brain
     * @param {String} text text
     */

    async brain(text) {
        let data = await fetch.get(`${base}/brain?text=${text}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * brazzers
     * @param {String} avatar1 avatar1
     */

    async brazzers(avatar1) {
        let data = await fetch.get(`${base}/brazzers?avatar1=${avatar1}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * byemom
     * @param {String} avatar1 avatar1
     * @param {String} username1 username1
     * @param {String} text text
     */

    async byemom(avatar1, username1, text) {
        let data = await fetch.get(`${base}/byemom?avatar1=${avatar1}&username1=${username1}&text=${text}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * cancer
     * @param {String} avatar1 avatar1
     */

    async cancer(avatar1) {
        let data = await fetch.get(`${base}/cancer?avatar1=${avatar1}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * changemymind
     * @param {String} text text
     */

    async changemymind(text) {
        let data = await fetch.get(`${base}/changemymind?text=${text}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * cheating
     * @param {String} text text
     */

    async cheating(text) {
        let data = await fetch.get(`${base}/cheating?text=${text}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * citation
     * @param {String} text text
     */

    async citation(text) {
        let data = await fetch.get(`${base}/citation?text=${text}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * communism
     * @param {String} avatar1 avatar1
     */

    async communism(avatar1) {
        let data = await fetch.get(`${base}/communism?avatar1=${avatar1}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * confusedcat
     * @param {String} text text
     */

    async confusedcat(text) {
        let data = await fetch.get(`${base}/confusedcat?text=${text}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * corporate
     * @param {String} avatar1 avatar1
     */

    async corporate(avatar1) {
        let data = await fetch.get(`${base}/corporate?avatar1=${avatar1}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * crab
     * This endpoint returns an MP4 file. Make sure your application knows how to handle this format. Malformed requests count against your ratelimit for this endpoint. Separate text with a comma.
     * @param {String} text text
     */

    async crab(text) {
        let data = await fetch.get(`${base}/crab?text=${text}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * cry
     * @param {String} text text 
     */

    async cry(text) {
        let data = await fetch.get(`${base}/cry?text=${text}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    //// Dank Memer \\\\
    /**
     * dab
     * @param {String} avatar1 avatar 
     */

    async dab(avatar1) {
        let data = await fetch.get(`${base}/dab?avatar1=${avatar1}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * dank
     * @param {String} avatar1 avatar 
     */

    async dank(avatar1) {
        let data = await fetch.get(`${base}/dank?avatar1=${avatar1}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * deepfry
     * @param {String} avatar1 avatar 
     */

    async deepfry(avatar1) {
        let data = await fetch.get(`${base}/deepfry?avatar1=${avatar1}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * delete
     * @param {String} avatar1 avatar 
     */

    async delete(avatar1) {
        let data = await fetch.get(`${base}/delete?avatar1=${avatar1}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * disability
     * @param {String} avatar1 avatar 
     */

    async disability(avatar1) {
        let data = await fetch.get(`${base}/disability?avatar1=${avatar1}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * doglemon
     * @param {String} text text 
     */

    async doglemon(text) {
        let data = await fetch.get(`${base}/doglemon?text=${text}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * door
     * @param {String} avatar1 avatar1 
     */

    async door(avatar1) {
        let data = await fetch.get(`${base}/door?avatar1=${avatar1}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * egg
     * @param {String} avatar1 avatar1 
     */

    async egg(avatar1) {
        let data = await fetch.get(`${base}/egg?avatar1=${avatar1}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * excuseme
     * @param {String} text text 
     */

    async excuseme(text) {
        let data = await fetch.get(`${base}/excuseme?text=${text}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * expanddong
     * @param {String} text text 
     */

    async expanddong(text) {
        let data = await fetch.get(`${base}/expanddong?text=${text}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * facts
     * @param {String} text text 
     */

    async facts(text) {
        let data = await fetch.get(`${base}/facts?text=${text}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * failure
     * @param {String} avatar1 avatar1 
     */

    async failure(avatar1) {
        let data = await fetch.get(`${base}/failure?avatar1=${avatar1}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * fakenews
     * @param {String} avatar1 avatar1 
     */

    async fakenews(avatar1) {
        let data = await fetch.get(`${base}/fakenews?avatar1=${avatar1}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * fedora
     * @param {String} avatar1 avatar1 
     */

    async fedora(avatar1) {
        let data = await fetch.get(`${base}/fedora?avatar1=${avatar1}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * floor
     * @param {String} avatar1 avatar1 
     * @param {String} text text
     */

    async floor(avatar1, text) {
        let data = await fetch.get(`${base}/floor?avatar1=${avatar1}&text=${text}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * fuck
     * @param {String} text text
     */

    async fuck(text) {
        let data = await fetch.get(`${base}/fuck?text=${text}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * garfield
     * @param {String} avatar1 avatar
     * @param {String} text text
     */

    async garfield(avatar1, text) {
        let data = await fetch.get(`${base}/garfield?avatar1=${avatar1}&text=${text}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * gay
     * @param {String} avatar1 avatar
     */

    async gay(avatar1) {
        let data = await fetch.get(`${base}/gay?avatar1=${avatar1}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * goggles
     * @param {String} avatar1 avatar
     */

    async goggles(avatar1) {
        let data = await fetch.get(`${base}/goggles?avatar1=${avatar1}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * hitler
     * @param {String} avatar1 avatar
     */

    async hitler(avatar1) {
        let data = await fetch.get(`${base}/hitler?avatar1=${avatar1}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * humansgood
     * @param {String} text text
     */

    async humansgood(text) {
        let data = await fetch.get(`${base}/humansgood?text=${text}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * inator
     * @param {String} text text
     */

    async inator(text) {
        let data = await fetch.get(`${base}/inator?text=${text}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * invert
     * @param {String} avatar1 avatar1
     */

    async invert(avatar1) {
        let data = await fetch.get(`${base}/invert?avatar1=${avatar1}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * jail
     * @param {String} avatar1 avatar1
     */

    async jail(avatar1) {
        let data = await fetch.get(`${base}/jail?avatar1=${avatar1}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * justpretending
     * @param {String} text text
     */

    async justpretending(text) {
        let data = await fetch.get(`${base}/justpretending?text=${text}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * kimborder
     * @param {String} avatar1 avatar1
     */

    async kimborder(avatar1) {
        let data = await fetch.get(`${base}/kimborder?avatar1=${avatar1}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * knowyourlocation
     * @param {String} text text
     */

    async knowyourlocation(text) {
        let data = await fetch.get(`${base}/knowyourlocation?text=${text}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * kowalski
     * @param {String} text text
     */

    async kowalski(text) {
        let data = await fetch.get(`${base}/kowalski?text=${text}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * laid
     * @param {String} avatar1 avatar1
     */

    async laid(avatar1) {
        let data = await fetch.get(`${base}/laid?avatar1=${avatar1}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * lick
     * @param {String} text text
     */

    async lick(text) {
        let data = await fetch.get(`${base}/lick?text=${text}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * madethis
     * @param {String} avatar1 avatar1
     * @param {String} avatar2 avatar2
     */

    async madethis(avatar1, avatar2) {
        let data = await fetch.get(`${base}/madethis?avatar1=${avatar1}&avatar2=${avatar2}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * magik
     * @param {String} avatar1 avatar1
     */

    async magik(avatar1) {
        let data = await fetch.get(`${base}/magik?avatar1=${avatar1}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * master
     * @param {String} text text
     */

    async master(text) {
        let data = await fetch.get(`${base}/master?text=${text}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * meme
     * This endpoint works a bit differently from the other endpoints. This endpoint takes in top_text and bottom_text parameters instead of text. It also supports color and font parameters. Fonts supported are: arial, arimobold, impact, robotomedium, robotoregular, sans, segoeuireg, tahoma and verdana. Colors can be defined with HEX codes or web colors, e.g. black, white, orange etc. Try your luck ;) The default is Impact in white
     * @param {String} avatar1 avatar1
     * @param {String} top_text top_text
     * @param {String} bottom_text bottom_text
     * @param {String} color color
     * @param {String} font font
     */

    async meme(avatar1, top_text, bottom_text, color, font) {
        let data = await fetch.get(`${base}/meme?avatar1=${avatar1}&top_text=${top_text}&bottom_text=${bottom_text}&color=${color || "white"}&font=${font || "arial"}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * note
     * @param {String} text text
     */

    async note(text) {
        let data = await fetch.get(`${base}/note?text=${text}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * nothing
     * @param {String} text text
     */

    async nothing(text) {
        let data = await fetch.get(`${base}/nothing?text=${text}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * ohno
     * @param {String} text text
     */

    async ohno(text) {
        let data = await fetch.get(`${base}/ohno?text=${text}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * piccolo
     * @param {String} text text
     */

    async piccolo(text) {
        let data = await fetch.get(`${base}/piccolo?text=${text}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * plan
     * @param {String} text text
     */

    async plan(text) {
        let data = await fetch.get(`${base}/plan?text=${text}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * presentation
     * @param {String} text text
     */

    async presentation(text) {
        let data = await fetch.get(`${base}/presentation?text=${text}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * quote
     * @param {String} avatar1 avatar1
     * @param {String} username1 username1
     * @param {String} text text
     */

    async quote(avatar1, username1, text) {
        let data = await fetch.get(`${base}/quote?avatar1=${avatar1}&username1=${username1}text=${text}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * radialblur
     * @param {String} avatar1 avatar1
     */

    async radialblur(avatar1) {
        let data = await fetch.get(`${base}/radialblur?avatar1=${avatar1}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * rip
     * @param {String} avatar1 avatar1
     */

    async rip(avatar1) {
        let data = await fetch.get(`${base}/rip?avatar1=${avatar1}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * roblox
     * @param {String} avatar1 avatar1
     */

    async roblox(avatar1) {
        let data = await fetch.get(`${base}/roblox?avatar1=${avatar1}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * salty
     * @param {String} avatar1 avatar1
     */

    async salty(avatar1) {
        let data = await fetch.get(`${base}/salty?avatar1=${avatar1}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * satan
     * @param {String} avatar1 avatar1
     */

    async satan(avatar1) {
        let data = await fetch.get(`${base}/satan?avatar1=${avatar1}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * savehumanity
     * @param {String} text text
     */

    async savehumanity(text) {
        let data = await fetch.get(`${base}/savehumanity?text=${text}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * screams
     * @param {String} avatar1 avatar1
     * @param {String} avatar2 avatar2
     */

    async screams(avatar1, avatar2) {
        let data = await fetch.get(`${base}/screams?avatar1=${avatar1}&avatar2=${avatar2}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * shit
     * @param {String} text text
     */

    async shit(text) {
        let data = await fetch.get(`${base}/shit?text=${text}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * sickban
     * @param {String} avatar1 avatar1
     */

    async sickban(avatar1) {
        let data = await fetch.get(`${base}/sickban?avatar1=${avatar1}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * slap
     * @param {String} avatar1 avatar1
     * @param {String} avatar2 avatar2
     */

    async slap(avatar1, avatar2) {
        let data = await fetch.get(`${base}/slap?avatar1=${avatar1}&avatar2=${avatar2}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * slapsroof
     * @param {String} text text
     */

    async slapsroof(text) {
        let data = await fetch.get(`${base}/slapsroof?text=${text}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * sneakyfox
     * @param {String} text text
     */

    async sneakyfox(text) {
        let data = await fetch.get(`${base}/sneakyfox?text=${text}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * spank
     * @param {String} avatar1 avatar1
     * @param {String} avatar2 avatar2
     */

    async spank(avatar1, avatar2) {
        let data = await fetch.get(`${base}/spank?avatar1=${avatar1}&avatar2=${avatar2}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * stroke
     * @param {String} text text
     */

    async stroke(text) {
        let data = await fetch.get(`${base}/stroke?text=${text}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * surprised
     * @param {String} text text
     */

    async surprised(text) {
        let data = await fetch.get(`${base}/surprised?text=${text}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * sword
     * @param {String} text text
     * @param {String} username1 username1
     */

    async sword(text, username1) {
        let data = await fetch.get(`${base}/sword?text=${text}&username1=${username1}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * thesearch
     * @param {String} text text
     */

    async thesearch(text) {
        let data = await fetch.get(`${base}/thesearch?text=${text}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * trash
     * @param {String} avatar1 avatar1
     */

    async trash(avatar1) {
        let data = await fetch.get(`${base}/trash?avatar1=${avatar1}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * tiger
     * @param {String} avatar1 avatar1
     */

    async tiger(avatar1) {
        let data = await fetch.get(`${base}/tiger?avatar1=${avatar1}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * trigger
     * @param {String} avatar1 avatar1
     */

    async trigger(avatar1) {
        let data = await fetch.get(`${base}/trigger?avatar1=${avatar1}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * tweet
     * @param {String} avatar1 avatar1
     * @param {String} username1 username1
     * @param {String} text text
     */

    async tweet(avatar1, username1, text) {
        let data = await fetch.get(`${base}/tweet?avatar1=${avatar1}&username1=${username1}&text=${text}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * ugly
     * @param {String} avatar1 avatar1
     */

    async ugly(avatar1) {
        let data = await fetch.get(`${base}/ugly?avatar1=${avatar1}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * unpopular
     * @param {String} avatar1 avatar1
     * @param {String} text text
     */

    async unpopular(avatar1, text) {
        let data = await fetch.get(`${base}/unpopular?avatar1=${avatar1}&text=${text}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * violence
     * @param {String} text text
     */

    async violence(text) {
        let data = await fetch.get(`${base}/violence?text=${text}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * violentsparks
     * @param {String} text text
     */

    async violentsparks(text) {
        let data = await fetch.get(`${base}/violentsparks?text=${text}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * vr
     * @param {String} text text
     */

    async vr(text) {
        let data = await fetch.get(`${base}/vr?text=${text}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * walking
     * @param {String} text text
     */

    async walking(text) {
        let data = await fetch.get(`${base}/walking?text=${text}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * wanted
     * @param {String} avatar1 avatar1
     */

    async wanted(avatar1) {
        let data = await fetch.get(`${base}/wanted?avatar1=${avatar1}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * wrap
     * @param {String} avatar1 avatar1
     */

    async wrap(avatar1) {
        let data = await fetch.get(`${base}/wrap?avatar1=${avatar1}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * whodidthis
     * @param {String} avatar1 avatar1
     */

    async whodidthis(avatar1) {
        let data = await fetch.get(`${base}/whodidthis?avatar1=${avatar1}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * whothisis
     * @param {String} avatar1 avatar1
     */

    async whothisis(avatar1) {
        let data = await fetch.get(`${base}/whothisis?avatar1=${avatar1}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

    /**
     * yomomma
     */

    async yomomma() {
        let data = await fetch.get(`${base}/yomomma`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body.text;
    }

    /**
     * youtube
     * @param {String} avatar1 avatar1
     * @param {String} username1 username1
     * @param {String} text text
     */

    async youtube(avatar1, username1, text) {
        let data = await fetch.get(`${base}/youtube?avatar1=${avatar1}&username1=${username1}&text=${text}`, {
            headers: {
                "Authorization": this.token
            }
        });
        return data.body;
    }

}

module.exports = Dank;
