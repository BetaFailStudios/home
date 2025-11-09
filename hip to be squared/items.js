const weapons = [
    {
        name: "Basic Gun",
        desc: "Starting gun",
        drawPath: JSON.parse(
            `[{"type":"point","x":200,"y":50},{"type":"point","x":250,"y":50},{"type":"point","x":250,"y":-50},{"type":"point","x":200,"y":-50},{"type":"point","x":200,"y":75},{"type":"point","x":-250,"y":75},{"type":"point","x":-250,"y":-75},{"type":"point","x":200,"y":-75},{"type":"close"},{"type":"point","x":-125,"y":75,"move":true},{"type":"point","x":-150,"y":175,"move":false},{"type":"point","x":-200,"y":250,"move":false},{"type":"point","x":-100,"y":250,"move":false},{"type":"point","x":-50,"y":175,"move":false},{"type":"point","x":-25,"y":75,"move":false},{"type":"fill","r":125,"g":125,"b":125},{"type":"stroke","r":75,"g":75,"b":75}]`
        ),
        bulletDrawPath: JSON.parse(
            `[{"type":"point","x":-250,"y":0},{"type":"point","x":-225,"y":-100},{"type":"point","x":-175,"y":-175},{"type":"point","x":-100,"y":-225},{"type":"point","x":0,"y":-250},{"type":"point","x":100,"y":-225},{"type":"point","x":175,"y":-175},{"type":"point","x":225,"y":-100},{"type":"point","x":250,"y":0},{"type":"point","x":225,"y":100},{"type":"point","x":175,"y":175},{"type":"point","x":100,"y":225},{"type":"point","x":0,"y":250},{"type":"point","x":-100,"y":225},{"type":"point","x":-175,"y":175},{"type":"point","x":-225,"y":100},{"type":"close"},{"type":"fill","r":100,"g":100,"b":100},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), statChange(rarity) {
            stats.damage *= 1 + 0.15*rarity;
        }
    },{
        name: "Gatling Gun",
        desc: "High Fire rate",
        drawPath: JSON.parse(
            `[{"type":"point","x":300,"y":-50,"move":false},{"type":"point","x":300,"y":50,"move":false},{"type":"point","x":-50,"y":50,"move":false},{"type":"point","x":-50,"y":-50,"move":false},{"type":"close"},{"type":"point","x":250,"y":-50,"move":true},{"type":"point","x":250,"y":-100,"move":false},{"type":"point","x":-50,"y":-100,"move":false},{"type":"point","x":-50,"y":-50,"move":false},{"type":"point","x":-50,"y":50,"move":true},{"type":"point","x":-50,"y":100,"move":false},{"type":"point","x":250,"y":100,"move":false},{"type":"point","x":250,"y":50,"move":false},{"type":"fill","r":175,"g":175,"b":175},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":100,"y":-125,"move":true},{"type":"point","x":100,"y":125,"move":false},{"type":"point","x":50,"y":125,"move":false},{"type":"point","x":50,"y":-125,"move":false},{"type":"close"},{"type":"point","x":-50,"y":-125,"move":true},{"type":"point","x":-50,"y":125,"move":false},{"type":"point","x":-250,"y":125,"move":false},{"type":"point","x":-250,"y":-125,"move":false},{"type":"point","x":-150,"y":-175,"move":false},{"type":"point","x":-75,"y":-175,"move":false},{"type":"point","x":-75,"y":-150,"move":false},{"type":"point","x":-125,"y":-150,"move":false},{"type":"point","x":-175,"y":-125,"move":false},{"type":"close"},{"type":"fill","r":100,"g":100,"b":100},{"type":"stroke","r":50,"g":50,"b":50}]`
        ),
        bulletDrawPath: JSON.parse(
            `[{"type":"point","x":-250,"y":-50},{"type":"point","x":-200,"y":-100},{"type":"point","x":150,"y":-100},{"type":"point","x":250,"y":-50},{"type":"point","x":300,"y":0},{"type":"point","x":250,"y":50},{"type":"point","x":150,"y":100},{"type":"point","x":100,"y":100},{"type":"point","x":-200,"y":100},{"type":"point","x":-250,"y":50},{"type":"close"},{"type":"fill","r":100,"g":100,"b":100},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), statChange(rarity) {
            stats.firerate *= 0.2 - 0.012*rarity;
            stats.damage *= 0.5 + 0.015*rarity;
            stats.bloom *= 3-0.2*rarity;
        }
    },{
        name: "Hand Cannon",
        desc: "High damage, low firerate",
        drawPath: JSON.parse(
            `[{"type":"point","x":275,"y":-100},{"type":"point","x":300,"y":-25},{"type":"point","x":300,"y":25},{"type":"point","x":275,"y":100},{"type":"point","x":250,"y":125},{"type":"point","x":-225,"y":125},{"type":"point","x":-250,"y":100},{"type":"point","x":-275,"y":25},{"type":"point","x":-275,"y":-25},{"type":"point","x":-250,"y":-100},{"type":"point","x":-225,"y":-125},{"type":"point","x":250,"y":-125},{"type":"close"},{"type":"fill","r":100,"g":100,"b":100},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-250,"y":25,"move":false},{"type":"point","x":-200,"y":75,"move":false},{"type":"point","x":225,"y":75,"move":false},{"type":"point","x":275,"y":25,"move":false},{"type":"point","x":275,"y":-25,"move":false},{"type":"point","x":225,"y":-75,"move":false},{"type":"point","x":-200,"y":-75,"move":false},{"type":"point","x":-250,"y":-25,"move":false},{"type":"close"},{"type":"fill","r":125,"g":125,"b":125},{"type":"close"},{"type":"stroke","r":110,"g":110,"b":110},{"type":"point","x":-200,"y":100,"move":false},{"type":"point","x":100,"y":100,"move":false},{"type":"point","x":-50,"y":250,"move":true},{"type":"point","x":-50,"y":-50,"move":false},{"type":"point","x":-150,"y":200,"move":true},{"type":"point","x":50,"y":0,"move":false},{"type":"point","x":50,"y":200,"move":true},{"type":"point","x":-150,"y":0,"move":false},{"type":"point","x":-50,"y":-50,"move":false},{"type":"point","x":50,"y":0,"move":false},{"type":"point","x":100,"y":100,"move":false},{"type":"point","x":50,"y":200,"move":false},{"type":"point","x":-50,"y":250,"move":false},{"type":"point","x":-150,"y":200,"move":false},{"type":"point","x":-200,"y":100,"move":false},{"type":"point","x":-150,"y":0,"move":false},{"type":"stroke","r":125,"g":100,"b":50}]`
        ),
        bulletDrawPath: JSON.parse(
            `[{"type":"point","x":-250,"y":0},{"type":"point","x":-225,"y":-100},{"type":"point","x":-175,"y":-175},{"type":"point","x":-100,"y":-225},{"type":"point","x":0,"y":-250},{"type":"point","x":100,"y":-225},{"type":"point","x":175,"y":-175},{"type":"point","x":225,"y":-100},{"type":"point","x":250,"y":0},{"type":"point","x":225,"y":100},{"type":"point","x":175,"y":175},{"type":"point","x":100,"y":225},{"type":"point","x":0,"y":250},{"type":"point","x":-100,"y":225},{"type":"point","x":-175,"y":175},{"type":"point","x":-225,"y":100},{"type":"close"},{"type":"fill","r":100,"g":100,"b":100},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), statChange(rarity) {
            stats.firerate *= 2 - 0.05*rarity;
            stats.damage *= 2.5 + 0.05*rarity;
            stats.bulletSpeed *= 0.7;
            stats.bulletSize *= 1.5 + 0.1*rarity;
        }
    },{
        name: "Sawed Off",
        desc: "High damage, many projectiles",
        drawPath: JSON.parse(
            `[{"type":"point","x":-75,"y":25},{"type":"point","x":-25,"y":-25},{"type":"point","x":-75,"y":-75},{"type":"point","x":225,"y":-75},{"type":"point","x":275,"y":-25},{"type":"point","x":250,"y":0},{"type":"point","x":-50,"y":0},{"type":"point","x":-50,"y":100,"move":true},{"type":"point","x":0,"y":50,"move":false},{"type":"point","x":-50,"y":0,"move":false},{"type":"point","x":250,"y":0,"move":false},{"type":"point","x":300,"y":50,"move":false},{"type":"point","x":250,"y":100,"move":false},{"type":"close"},{"type":"fill","r":100,"g":100,"b":100},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-75,"y":-75,"move":false},{"type":"point","x":-125,"y":-25,"move":false},{"type":"point","x":-75,"y":25,"move":false},{"type":"point","x":-50,"y":0,"move":false},{"type":"point","x":0,"y":50,"move":false},{"type":"point","x":-50,"y":100,"move":false},{"type":"point","x":-100,"y":50,"move":false},{"type":"point","x":-25,"y":-25,"move":false},{"type":"close"},{"type":"fill","r":75,"g":75,"b":75},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-75,"y":-25,"move":false},{"type":"point","x":-50,"y":50,"move":false},{"type":"point","x":-75,"y":100,"move":false},{"type":"point","x":-175,"y":200,"move":false},{"type":"point","x":-200,"y":200,"move":false},{"type":"point","x":-225,"y":175,"move":false},{"type":"point","x":-225,"y":150,"move":false},{"type":"point","x":-125,"y":50,"move":false},{"type":"point","x":-100,"y":-12.5,"move":false},{"type":"close"},{"type":"fill","r":125,"g":100,"b":50},{"type":"stroke","r":50,"g":50,"b":50}]`
        ),
        bulletDrawPath: JSON.parse(
            `[{"type":"point","x":0,"y":-250},{"type":"point","x":75,"y":-125},{"type":"point","x":175,"y":-125},{"type":"point","x":237.5,"y":-12.5},{"type":"point","x":250,"y":12.5},{"type":"point","x":200,"y":175},{"type":"point","x":62.5,"y":212.5},{"type":"point","x":-25,"y":250},{"type":"point","x":-150,"y":175},{"type":"point","x":-175,"y":50},{"type":"point","x":-250,"y":12.5},{"type":"point","x":-187.5,"y":-137.5},{"type":"point","x":-87.5,"y":-250},{"type":"close"},{"type":"fill","r":75,"g":75,"b":75},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), statChange(rarity) {
            stats.firerate *= 1.5 - 0.03*rarity;
            stats.damage *= 0.65 + 0.2*rarity;
            stats.bulletSize *= 0.9;
            stats.bulletSpeed *= 0.6;
            stats.projectiles += 4;
            stats.bloom *= 2.5;
            stats.spread *= 1.25;
            stats.lifetime = 0.3;
        }
    },{
        name: "Railgun",
        desc: "High damage, low firerate",
        drawPath: JSON.parse(
            `[{"type":"point","x":237.5,"y":-25},{"type":"point","x":225,"y":0},{"type":"point","x":237.5,"y":25},{"type":"point","x":-75,"y":25},{"type":"point","x":-75,"y":-25},{"type":"close"},{"type":"fill","r":125,"g":255,"b":255},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":287.5,"y":25},{"type":"point","x":250,"y":50},{"type":"point","x":225,"y":75},{"type":"point","x":200,"y":87.5},{"type":"point","x":-50,"y":100},{"type":"point","x":-100,"y":75},{"type":"point","x":-200,"y":50},{"type":"point","x":-225,"y":100},{"type":"point","x":-250,"y":175},{"type":"point","x":-275,"y":162.5},{"type":"point","x":-250,"y":75},{"type":"point","x":-237.5,"y":0},{"type":"point","x":-250,"y":-37.5},{"type":"point","x":-225,"y":-50},{"type":"point","x":-100,"y":-75},{"type":"point","x":-50,"y":-100},{"type":"point","x":200,"y":-87.5},{"type":"point","x":225,"y":-75},{"type":"point","x":250,"y":-50},{"type":"point","x":287.5,"y":-25},{"type":"point","x":200,"y":-25},{"type":"point","x":187.5,"y":0},{"type":"point","x":175,"y":-25},{"type":"point","x":75,"y":-25},{"type":"point","x":62.5,"y":0},{"type":"point","x":50,"y":-25},{"type":"point","x":-50,"y":-25},{"type":"point","x":-62.5,"y":0},{"type":"point","x":-50,"y":25},{"type":"point","x":50,"y":25},{"type":"point","x":62.5,"y":0},{"type":"point","x":75,"y":25},{"type":"point","x":175,"y":25},{"type":"point","x":187.5,"y":0},{"type":"point","x":200,"y":25},{"type":"close"},{"type":"fill","r":75,"g":75,"b":100},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":200,"y":-50},{"type":"point","x":-75,"y":-50},{"type":"point","x":-100,"y":0,"move":false},{"type":"point","x":-75,"y":50,"move":false},{"type":"point","x":187.5,"y":50,"move":false},{"type":"point","x":-112.5,"y":-37.5,"move":true},{"type":"point","x":-125,"y":0,"move":false},{"type":"point","x":-112.5,"y":37.5,"move":false},{"type":"point","x":-150,"y":-25,"move":true},{"type":"point","x":-162.5,"y":0,"move":false},{"type":"point","x":-150,"y":25,"move":false},{"type":"point","x":-187.5,"y":-12.5,"move":true},{"type":"point","x":-200,"y":0,"move":false},{"type":"point","x":-187.5,"y":12.5,"move":false},{"type":"stroke","r":125,"g":255,"b":255}]`
        ),
        bulletDrawPath: JSON.parse(
            `[{"type":"point","x":-300,"y":0},{"type":"point","x":-100,"y":-25},{"type":"point","x":250,"y":-50},{"type":"point","x":287.5,"y":-25},{"type":"point","x":300,"y":0},{"type":"point","x":287.5,"y":25},{"type":"point","x":250,"y":50},{"type":"point","x":-100,"y":25},{"type":"close"},{"type":"fill","r":125,"g":255,"b":255},{"type":"stroke","r":75,"g":175,"b":175}]`
        ), statChange(rarity) {
            stats.firerate *= 1.6 - 0.05*rarity;
            stats.damage *= 2.3 + 0.2*rarity;
            stats.bulletSpeed *= 3;
            stats.bulletSize *= 2;
        }
    },{
        name: "Gas Can",
        desc: "Lots of low damage bullets",
        drawPath: JSON.parse(
            `[{"type":"point","x":225,"y":-75},{"type":"point","x":225,"y":50},{"type":"point","x":-25,"y":300},{"type":"point","x":-125,"y":300},{"type":"point","x":-300,"y":125},{"type":"point","x":-300,"y":25},{"type":"point","x":-25,"y":-250},{"type":"point","x":50,"y":-250},{"type":"close"},{"type":"point","x":0,"y":100,"move":true},{"type":"point","x":75,"y":75,"move":false},{"type":"point","x":100,"y":0,"move":false},{"type":"point","x":75,"y":-75,"move":false},{"type":"point","x":0,"y":-100,"move":false},{"type":"point","x":-75,"y":-75,"move":false},{"type":"point","x":-100,"y":0,"move":false},{"type":"point","x":-75,"y":75,"move":false},{"type":"close"},{"type":"fill","r":175,"g":75,"b":70},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":175,"y":-125,"move":false},{"type":"point","x":200,"y":-125,"move":false},{"type":"point","x":225,"y":-100,"move":false},{"type":"point","x":250,"y":-100,"move":false},{"type":"point","x":250,"y":75,"move":false},{"type":"point","x":225,"y":75,"move":false},{"type":"point","x":200,"y":100,"move":false},{"type":"point","x":175,"y":100,"move":false},{"type":"close"},{"type":"fill","r":25,"g":25,"b":25},{"type":"stroke","r":50,"g":50,"b":50}]`
        ),
        bulletDrawPath: JSON.parse(
            `[{"type":"point","x":250,"y":0},{"type":"point","x":225,"y":-50},{"type":"point","x":175,"y":-100},{"type":"point","x":100,"y":-125},{"type":"point","x":50,"y":-75},{"type":"point","x":-100,"y":-25},{"type":"point","x":-300,"y":0},{"type":"point","x":-100,"y":25},{"type":"point","x":50,"y":75},{"type":"point","x":100,"y":125},{"type":"point","x":162.5,"y":100},{"type":"point","x":225,"y":50},{"type":"close"},{"type":"fill","r":255,"g":100,"b":100},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":100,"y":-75},{"type":"point","x":162.5,"y":-50},{"type":"point","x":200,"y":0},{"type":"point","x":162.5,"y":50},{"type":"point","x":100,"y":75},{"type":"point","x":75,"y":50},{"type":"point","x":-50,"y":0},{"type":"point","x":75,"y":-50},{"type":"close"},{"type":"fill","r":255,"g":200,"b":100},{"type":"stroke","r":255,"g":150,"b":100}]`
        ), statChange(rarity) {
            stats.firerate *= 0.2 - 0.03*rarity;
            stats.damage *= 0.11 + 0.03*rarity;
            stats.bulletSpeed *= 0.3;
            stats.bulletSize *= 2;
            stats.projectiles += 1;
            stats.bloom *= 2;
            stats.spread *= 0.3;
            stats.lifetime = 0.7;
        }
    }
]

weapons.forEach((item) => item.type = "weapon");

const relics = [
    {
        name: "Growth Pill",
        desc: "Increases bullet size & Damage",
        drawPath: JSON.parse(
            `[{"type":"point","x":-200,"y":200},{"type":"point","x":-225,"y":150},{"type":"point","x":-225,"y":50},{"type":"point","x":-175,"y":-25},{"type":"point","x":-100,"y":-100},{"type":"point","x":100,"y":100},{"type":"point","x":25,"y":175},{"type":"point","x":-50,"y":225},{"type":"point","x":-150,"y":225},{"type":"close"},{"type":"fill","r":175,"g":100,"b":100},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-100,"y":-100},{"type":"point","x":100,"y":100},{"type":"point","x":175,"y":25},{"type":"point","x":225,"y":-50},{"type":"point","x":225,"y":-150},{"type":"point","x":200,"y":-200},{"type":"point","x":150,"y":-225},{"type":"point","x":50,"y":-225},{"type":"point","x":-25,"y":-175},{"type":"close"},{"type":"fill","r":175,"g":175,"b":100},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), statChange(rarity) {
            stats.damage *= 1.20 + 0.1*rarity;
            stats.bulletSize *= 1.60 + 0.40*rarity;
        }
    },{
        name: "Sluggish Rounds",
        desc: "Increased bullet damage, reduced speed",
        drawPath: JSON.parse(
            `[{"type":"point","x":-225,"y":-75},{"type":"point","x":-200,"y":-100},{"type":"point","x":-150,"y":-125},{"type":"point","x":-100,"y":-125},{"type":"point","x":-75,"y":-100},{"type":"point","x":-50,"y":-50},{"type":"point","x":-75,"y":-25},{"type":"point","x":-125,"y":0},{"type":"point","x":-175,"y":0},{"type":"point","x":-200,"y":-25},{"type":"close"},{"type":"point","x":-125,"y":-200},{"type":"point","x":-50,"y":-250},{"type":"point","x":25,"y":-275},{"type":"point","x":50,"y":-275},{"type":"point","x":50,"y":-250},{"type":"point","x":25,"y":-150},{"type":"point","x":-50,"y":-50},{"type":"fill","r":100,"g":100,"b":100},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":0,"y":-125},{"type":"point","x":50,"y":-100},{"type":"point","x":100,"y":-125},{"type":"point","x":150,"y":-75},{"type":"point","x":100,"y":0},{"type":"point","x":25,"y":25},{"type":"point","x":-25,"y":75},{"type":"point","x":0,"y":125},{"type":"point","x":50,"y":100},{"type":"point","x":50,"y":100,"move":true},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":50,"y":100,"move":false},{"type":"point","x":75,"y":50,"move":false},{"type":"point","x":125,"y":25,"move":false},{"type":"point","x":175,"y":50,"move":false},{"type":"point","x":200,"y":100,"move":false},{"type":"point","x":175,"y":150,"move":false},{"type":"point","x":125,"y":175,"move":false},{"type":"point","x":75,"y":150,"move":false},{"type":"close"},{"type":"fill","r":25,"g":25,"b":25},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), statChange(rarity) {
            stats.damage *= 1.35 + 0.20*rarity;
            stats.bulletSpeed *= 0.35 + 0.05*rarity;
        }
    },{
        name: "Ice Cube",
        desc: "Increases movement speed",
        drawPath: JSON.parse(
            `[{"type":"point","x":-50,"y":-200},{"type":"point","x":-200,"y":-125},{"type":"point","x":25,"y":-50},{"type":"point","x":175,"y":-125},{"type":"close"},{"type":"point","x":-200,"y":-125,"move":true},{"type":"point","x":-200,"y":100,"move":false},{"type":"point","x":25,"y":175,"move":false},{"type":"point","x":25,"y":-50,"move":false},{"type":"point","x":25,"y":175,"move":false},{"type":"point","x":175,"y":100,"move":false},{"type":"point","x":175,"y":-125,"move":false},{"type":"fill","r":100,"g":150,"b":175},{"type":"stroke","r":50,"g":100,"b":150},{"type":"point","x":-200,"y":25,"move":false},{"type":"point","x":-225,"y":50,"move":false},{"type":"point","x":-250,"y":125,"move":false},{"type":"point","x":-175,"y":200,"move":false},{"type":"point","x":25,"y":250,"move":false},{"type":"point","x":175,"y":225,"move":false},{"type":"point","x":250,"y":150,"move":false},{"type":"point","x":250,"y":75,"move":false},{"type":"point","x":200,"y":25,"move":false},{"type":"point","x":175,"y":25,"move":false},{"type":"point","x":175,"y":100,"move":false},{"type":"point","x":25,"y":175,"move":false},{"type":"point","x":-200,"y":100,"move":false},{"type":"close"},{"type":"fill","r":100,"g":150,"b":175},{"type":"stroke","r":50,"g":100,"b":150}]`
        ), statChange(rarity) {
            stats.friction *= 0.95-0.05*rarity;
            stats.playerSpeed *= 1.2+0.03*rarity;
        }
    },{
        name: "After Images",
        desc: "Increases fire rate but reduces damage",
        drawPath: JSON.parse(
            `[{"type":"point","x":-275,"y":-25},{"type":"point","x":-250,"y":-100},{"type":"point","x":-200,"y":-150},{"type":"point","x":-125,"y":-175},{"type":"point","x":-75,"y":-175},{"type":"point","x":0,"y":-150},{"type":"point","x":50,"y":-100},{"type":"point","x":75,"y":-25},{"type":"point","x":75,"y":25},{"type":"point","x":50,"y":100},{"type":"point","x":0,"y":150},{"type":"point","x":-75,"y":175},{"type":"point","x":-125,"y":175},{"type":"point","x":-200,"y":150},{"type":"point","x":-250,"y":100},{"type":"point","x":-275,"y":25},{"type":"close"},{"type":"fill","r":175,"g":200,"b":250},{"type":"stroke","r":50,"g":100,"b":150},{"type":"point","x":0,"y":-150},{"type":"point","x":-75,"y":-125},{"type":"point","x":-125,"y":-75},{"type":"point","x":-150,"y":0},{"type":"point","x":-125,"y":75},{"type":"point","x":-75,"y":125},{"type":"point","x":0,"y":150},{"type":"point","x":75,"y":125},{"type":"point","x":125,"y":75},{"type":"point","x":150,"y":0},{"type":"point","x":125,"y":-75},{"type":"point","x":75,"y":-125},{"type":"close"},{"type":"fill","r":75,"g":125,"b":125},{"type":"stroke","r":50,"g":100,"b":150},{"type":"point","x":150,"y":-125},{"type":"point","x":200,"y":-100},{"type":"point","x":225,"y":-75},{"type":"point","x":250,"y":-25},{"type":"point","x":250,"y":25},{"type":"point","x":225,"y":75},{"type":"point","x":200,"y":100},{"type":"point","x":150,"y":125},{"type":"point","x":100,"y":125},{"type":"point","x":50,"y":100},{"type":"point","x":25,"y":75},{"type":"point","x":0,"y":25},{"type":"point","x":0,"y":-25},{"type":"point","x":25,"y":-75},{"type":"point","x":50,"y":-100},{"type":"point","x":100,"y":-125},{"type":"close"},{"type":"fill","r":50,"g":125,"b":125},{"type":"stroke","r":50,"g":100,"b":125}]`
        ), statChange(rarity) {
            stats.firerate *= 0.65-0.07*rarity;
            stats.damage *= 0.85+0.03*rarity;
        }
    },{
        name: "Rifling",
        desc: "Increases damage and bullet speed",
        drawPath: JSON.parse(
            `[{"type":"point","x":-250,"y":-50},{"type":"point","x":-225,"y":-150},{"type":"point","x":-150,"y":-225},{"type":"point","x":-50,"y":-250},{"type":"point","x":50,"y":-250},{"type":"point","x":150,"y":-225},{"type":"point","x":225,"y":-150},{"type":"point","x":250,"y":-50},{"type":"point","x":250,"y":50},{"type":"point","x":225,"y":150},{"type":"point","x":150,"y":225},{"type":"point","x":50,"y":250},{"type":"point","x":-50,"y":250},{"type":"point","x":-150,"y":225},{"type":"point","x":-225,"y":150},{"type":"point","x":-250,"y":50},{"type":"close"},{"type":"fill","r":100,"g":100,"b":100},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-250,"y":-50,"move":false},{"type":"point","x":-125,"y":-125,"move":false},{"type":"point","x":-50,"y":-125,"move":false},{"type":"point","x":25,"y":-100,"move":false},{"type":"point","x":50,"y":-50,"move":false},{"type":"point","x":25,"y":0,"move":false},{"type":"point","x":0,"y":0,"move":false},{"type":"point","x":25,"y":-50,"move":false},{"type":"point","x":0,"y":-75,"move":false},{"type":"point","x":-75,"y":-100,"move":false},{"type":"point","x":-175,"y":-50,"move":false},{"type":"point","x":-250,"y":50,"move":false},{"type":"close"},{"type":"point","x":50,"y":-250,"move":true},{"type":"point","x":125,"y":-125,"move":false},{"type":"point","x":125,"y":-50,"move":false},{"type":"point","x":100,"y":25,"move":false},{"type":"point","x":50,"y":50,"move":false},{"type":"point","x":0,"y":25,"move":false},{"type":"point","x":0,"y":0,"move":false},{"type":"point","x":50,"y":25,"move":false},{"type":"point","x":75,"y":0,"move":false},{"type":"point","x":100,"y":-75,"move":false},{"type":"point","x":50,"y":-175,"move":false},{"type":"point","x":-50,"y":-250,"move":false},{"type":"close"},{"type":"point","x":250,"y":50,"move":true},{"type":"point","x":125,"y":125,"move":false},{"type":"point","x":50,"y":125,"move":false},{"type":"point","x":-25,"y":100,"move":false},{"type":"point","x":-50,"y":50,"move":false},{"type":"point","x":-25,"y":0,"move":false},{"type":"point","x":0,"y":0,"move":false},{"type":"point","x":-25,"y":50,"move":false},{"type":"point","x":0,"y":75,"move":false},{"type":"point","x":75,"y":100,"move":false},{"type":"point","x":175,"y":50,"move":false},{"type":"point","x":250,"y":-50,"move":false},{"type":"close"},{"type":"point","x":-50,"y":250,"move":true},{"type":"point","x":-125,"y":125,"move":false},{"type":"point","x":-125,"y":50,"move":false},{"type":"point","x":-100,"y":-25,"move":false},{"type":"point","x":-50,"y":-50,"move":false},{"type":"point","x":0,"y":-25,"move":false},{"type":"point","x":0,"y":0,"move":false},{"type":"point","x":-50,"y":-25,"move":false},{"type":"point","x":-75,"y":0,"move":false},{"type":"point","x":-100,"y":75,"move":false},{"type":"point","x":-50,"y":175,"move":false},{"type":"point","x":50,"y":250,"move":false},{"type":"close"},{"type":"fill","r":25,"g":25,"b":25},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), statChange(rarity) {
            stats.damage *= 1.15 + 0.1*rarity;
            stats.bulletSpeed *= 1.35 + 0.1*rarity;
            stats.bloom *= 0.8;
        }
    },{
        name: "Bouncy Ball",
        desc: "Bullets bounce & gain damage when they do",
        drawPath: JSON.parse(
            `[{"type":"point","x":0,"y":-250},{"type":"point","x":125,"y":-225},{"type":"point","x":225,"y":-125},{"type":"point","x":250,"y":0},{"type":"point","x":225,"y":125},{"type":"point","x":125,"y":225},{"type":"point","x":0,"y":250},{"type":"point","x":-125,"y":225},{"type":"point","x":-225,"y":125},{"type":"point","x":-250,"y":0},{"type":"point","x":-225,"y":-125},{"type":"point","x":-125,"y":-225},{"type":"close"},{"type":"fill","r":125,"g":60,"b":105},{"type":"stroke","r":55,"g":15,"b":35},{"type":"point","x":150,"y":-150},{"type":"point","x":200,"y":-50},{"type":"point","x":150,"y":50},{"type":"point","x":50,"y":100},{"type":"point","x":-50,"y":50},{"type":"point","x":-100,"y":-50},{"type":"point","x":-50,"y":-150},{"type":"point","x":50,"y":-200},{"type":"close"},{"type":"fill","r":155,"g":75,"b":115},{"type":"stroke","r":140,"g":60,"b":110},{"type":"point","x":125,"y":-125,"move":false},{"type":"point","x":150,"y":-75,"move":false},{"type":"point","x":125,"y":-25,"move":false},{"type":"point","x":75,"y":0,"move":false},{"type":"point","x":25,"y":-25,"move":false},{"type":"point","x":0,"y":-75,"move":false},{"type":"point","x":25,"y":-125,"move":false},{"type":"point","x":75,"y":-150,"move":false},{"type":"close"},{"type":"fill","r":250,"g":135,"b":200},{"type":"stroke","r":230,"g":120,"b":180}]`
        ), statChange(rarity) {
            stats.bulletBounce = (stats.bulletBounce || 0) + 2 + rarity;
        }
    },{
        name: "Lottery Ticket",
        desc: "Chance for bullets to have massive damage",
        drawPath: JSON.parse(
            `[{"type":"point","x":-250,"y":-125},{"type":"point","x":250,"y":-250},{"type":"point","x":250,"y":125},{"type":"point","x":-250,"y":250},{"type":"close"},{"type":"fill","r":225,"g":220,"b":175},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-150,"y":175,"move":false},{"type":"point","x":-200,"y":150,"move":false},{"type":"point","x":-225,"y":100,"move":false},{"type":"point","x":-200,"y":50,"move":false},{"type":"point","x":-150,"y":25,"move":false},{"type":"point","x":-100,"y":50,"move":false},{"type":"point","x":-75,"y":100,"move":false},{"type":"point","x":-100,"y":150,"move":false},{"type":"close"},{"type":"point","x":0,"y":125,"move":true},{"type":"point","x":-50,"y":100,"move":false},{"type":"point","x":-75,"y":50,"move":false},{"type":"point","x":-50,"y":0,"move":false},{"type":"point","x":0,"y":-25,"move":false},{"type":"point","x":50,"y":0,"move":false},{"type":"point","x":75,"y":50,"move":false},{"type":"point","x":50,"y":100,"move":false},{"type":"close"},{"type":"point","x":75,"y":0,"move":true},{"type":"point","x":100,"y":50,"move":false},{"type":"point","x":150,"y":75,"move":false},{"type":"point","x":200,"y":50,"move":false},{"type":"point","x":225,"y":0,"move":false},{"type":"point","x":200,"y":-50,"move":false},{"type":"point","x":150,"y":-75,"move":false},{"type":"point","x":100,"y":-50,"move":false},{"type":"close"},{"type":"fill","r":200,"g":200,"b":200},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-150,"y":-100,"move":true},{"type":"point","x":-125,"y":0,"move":false},{"type":"point","x":-100,"y":-75,"move":false},{"type":"point","x":-75,"y":-25,"move":false},{"type":"point","x":-75,"y":-125,"move":false},{"type":"point","x":-50,"y":-25,"move":true},{"type":"point","x":50,"y":-75,"move":false},{"type":"point","x":0,"y":-50,"move":false},{"type":"point","x":0,"y":-150,"move":false},{"type":"point","x":-50,"y":-125,"move":true},{"type":"point","x":50,"y":-175,"move":false},{"type":"point","x":75,"y":-75,"move":true},{"type":"point","x":75,"y":-175,"move":false},{"type":"point","x":150,"y":-100,"move":false},{"type":"point","x":150,"y":-200,"move":false},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), statChange(rarity) {
            stats.lotteryChance = (stats.lotteryChance || 0) + 0.025 + 0.01*rarity;
        }
    },{
        name: "AA Chip",
        desc: "Bullets hit enemy projectiles",
        drawPath: JSON.parse(
            `[{"type":"point","x":-225,"y":-250,"move":false},{"type":"point","x":-250,"y":-225,"move":false},{"type":"point","x":-250,"y":225,"move":false},{"type":"point","x":-225,"y":250,"move":false},{"type":"point","x":225,"y":250,"move":false},{"type":"point","x":250,"y":225,"move":false},{"type":"point","x":250,"y":-225,"move":false},{"type":"point","x":225,"y":-250,"move":false},{"type":"close"},{"type":"fill","r":0,"g":75,"b":0},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-75,"y":-75,"move":false},{"type":"point","x":75,"y":-75,"move":false},{"type":"point","x":75,"y":75,"move":false},{"type":"point","x":-75,"y":75,"move":false},{"type":"close"},{"type":"point","x":-75,"y":-150,"move":false},{"type":"point","x":-50,"y":-175,"move":false},{"type":"point","x":-50,"y":-250,"move":false},{"type":"point","x":-50,"y":-75,"move":true},{"type":"point","x":-50,"y":-150,"move":false},{"type":"point","x":-25,"y":-175,"move":false},{"type":"point","x":-25,"y":-250,"move":false},{"type":"point","x":-25,"y":-75,"move":true},{"type":"point","x":-25,"y":-125,"move":false},{"type":"point","x":0,"y":-150,"move":false},{"type":"point","x":0,"y":-250,"move":false},{"type":"point","x":0,"y":-75,"move":true},{"type":"point","x":0,"y":-125,"move":false},{"type":"point","x":25,"y":-150,"move":false},{"type":"point","x":25,"y":-250,"move":false},{"type":"point","x":25,"y":-75,"move":true},{"type":"point","x":25,"y":-125,"move":false},{"type":"point","x":75,"y":-175,"move":false},{"type":"point","x":75,"y":-250,"move":false},{"type":"point","x":50,"y":-150,"move":true},{"type":"point","x":50,"y":-250,"move":false},{"type":"point","x":50,"y":-75,"move":true},{"type":"point","x":50,"y":-125,"move":false},{"type":"point","x":125,"y":-200,"move":false},{"type":"point","x":125,"y":-250,"move":false},{"type":"point","x":125,"y":-225,"move":true},{"type":"point","x":200,"y":-225,"move":false},{"type":"point","x":225,"y":-250,"move":false},{"type":"point","x":100,"y":-175,"move":true},{"type":"point","x":100,"y":-250,"move":false},{"type":"point","x":75,"y":-75,"move":true},{"type":"point","x":75,"y":-125,"move":false},{"type":"point","x":150,"y":-200,"move":false},{"type":"point","x":250,"y":-200,"move":false},{"type":"point","x":225,"y":-200,"move":true},{"type":"point","x":250,"y":-225,"move":false},{"type":"point","x":200,"y":-200,"move":true},{"type":"point","x":225,"y":-175,"move":false},{"type":"point","x":250,"y":-175,"move":false},{"type":"point","x":75,"y":-75,"move":true},{"type":"point","x":100,"y":-100,"move":false},{"type":"point","x":100,"y":-125,"move":false},{"type":"point","x":150,"y":-175,"move":false},{"type":"point","x":175,"y":-175,"move":false},{"type":"point","x":250,"y":-100,"move":false},{"type":"point","x":200,"y":-150,"move":true},{"type":"point","x":250,"y":-150,"move":false},{"type":"point","x":125,"y":-150,"move":true},{"type":"point","x":175,"y":-150,"move":false},{"type":"point","x":250,"y":-75,"move":false},{"type":"point","x":100,"y":-100,"move":true},{"type":"point","x":150,"y":-100,"move":false},{"type":"point","x":200,"y":-100,"move":false},{"type":"point","x":250,"y":-50,"move":false},{"type":"point","x":125,"y":-100,"move":true},{"type":"point","x":150,"y":-125,"move":false},{"type":"point","x":175,"y":-100,"move":false},{"type":"point","x":75,"y":-50,"move":true},{"type":"point","x":175,"y":-50,"move":false},{"type":"point","x":200,"y":-75,"move":false},{"type":"point","x":250,"y":-25,"move":false},{"type":"point","x":100,"y":-50,"move":true},{"type":"point","x":125,"y":-75,"move":false},{"type":"point","x":200,"y":-75,"move":false},{"type":"point","x":75,"y":-25,"move":true},{"type":"point","x":150,"y":-25,"move":false},{"type":"point","x":175,"y":0,"move":false},{"type":"point","x":250,"y":0,"move":false},{"type":"point","x":150,"y":-25,"move":true},{"type":"point","x":175,"y":-25,"move":false},{"type":"point","x":200,"y":-50,"move":false},{"type":"point","x":225,"y":-25,"move":false},{"type":"point","x":250,"y":-25,"move":false},{"type":"point","x":75,"y":0,"move":true},{"type":"point","x":125,"y":0,"move":false},{"type":"point","x":150,"y":25,"move":false},{"type":"point","x":250,"y":25,"move":false},{"type":"point","x":75,"y":25,"move":true},{"type":"point","x":125,"y":25,"move":false},{"type":"point","x":150,"y":50,"move":false},{"type":"point","x":250,"y":50,"move":false},{"type":"point","x":75,"y":50,"move":true},{"type":"point","x":125,"y":50,"move":false},{"type":"point","x":150,"y":75,"move":false},{"type":"point","x":250,"y":75,"move":false},{"type":"point","x":75,"y":75,"move":true},{"type":"point","x":125,"y":75,"move":false},{"type":"point","x":175,"y":125,"move":false},{"type":"point","x":250,"y":125,"move":false},{"type":"point","x":150,"y":100,"move":true},{"type":"point","x":250,"y":100,"move":false},{"type":"point","x":200,"y":125,"move":true},{"type":"point","x":200,"y":200,"move":false},{"type":"point","x":225,"y":225,"move":false},{"type":"point","x":225,"y":125,"move":true},{"type":"point","x":225,"y":250,"move":false},{"type":"point","x":100,"y":75,"move":true},{"type":"point","x":175,"y":150,"move":false},{"type":"point","x":175,"y":225,"move":false},{"type":"point","x":200,"y":250,"move":false},{"type":"point","x":75,"y":75,"move":true},{"type":"point","x":75,"y":150,"move":false},{"type":"point","x":125,"y":200,"move":false},{"type":"point","x":125,"y":250,"move":false},{"type":"point","x":100,"y":250,"move":true},{"type":"point","x":100,"y":225,"move":false},{"type":"point","x":50,"y":175,"move":false},{"type":"point","x":50,"y":75,"move":false},{"type":"point","x":25,"y":75,"move":true},{"type":"point","x":25,"y":175,"move":false},{"type":"point","x":50,"y":200,"move":false},{"type":"point","x":50,"y":250,"move":false},{"type":"point","x":75,"y":200,"move":true},{"type":"point","x":75,"y":250,"move":false},{"type":"point","x":100,"y":175,"move":true},{"type":"point","x":175,"y":175,"move":false},{"type":"point","x":150,"y":175,"move":true},{"type":"point","x":150,"y":250,"move":false},{"type":"point","x":150,"y":175,"move":true},{"type":"point","x":75,"y":100,"move":false},{"type":"point","x":0,"y":75,"move":true},{"type":"point","x":0,"y":175,"move":false},{"type":"point","x":25,"y":200,"move":false},{"type":"point","x":25,"y":250,"move":false},{"type":"point","x":-50,"y":75,"move":true},{"type":"point","x":-50,"y":150,"move":false},{"type":"point","x":0,"y":200,"move":false},{"type":"point","x":0,"y":250,"move":false},{"type":"point","x":-25,"y":175,"move":true},{"type":"point","x":-25,"y":75,"move":false},{"type":"point","x":-75,"y":75,"move":true},{"type":"point","x":-75,"y":175,"move":false},{"type":"point","x":-50,"y":200,"move":false},{"type":"point","x":-50,"y":250,"move":false},{"type":"point","x":-50,"y":225,"move":true},{"type":"point","x":-25,"y":250,"move":false},{"type":"point","x":-75,"y":250,"move":true},{"type":"point","x":-75,"y":200,"move":false},{"type":"point","x":-125,"y":150,"move":false},{"type":"point","x":-125,"y":25,"move":false},{"type":"point","x":-75,"y":-25,"move":false},{"type":"point","x":-100,"y":0,"move":true},{"type":"point","x":-100,"y":75,"move":false},{"type":"point","x":-75,"y":100,"move":false},{"type":"point","x":-75,"y":150,"move":true},{"type":"point","x":-125,"y":100,"move":false},{"type":"point","x":-125,"y":50,"move":true},{"type":"point","x":-225,"y":50,"move":false},{"type":"point","x":-250,"y":75,"move":false},{"type":"point","x":-125,"y":75,"move":true},{"type":"point","x":-225,"y":75,"move":false},{"type":"point","x":-250,"y":100,"move":false},{"type":"point","x":-250,"y":50,"move":true},{"type":"point","x":-200,"y":0,"move":false},{"type":"point","x":-125,"y":0,"move":false},{"type":"point","x":-75,"y":-50,"move":false},{"type":"point","x":-125,"y":25,"move":true},{"type":"point","x":-225,"y":25,"move":false},{"type":"point","x":-250,"y":125,"move":true},{"type":"point","x":-225,"y":100,"move":false},{"type":"point","x":-125,"y":100,"move":false},{"type":"point","x":-125,"y":125,"move":true},{"type":"point","x":-200,"y":125,"move":false},{"type":"point","x":-250,"y":175,"move":false},{"type":"point","x":-225,"y":150,"move":true},{"type":"point","x":-150,"y":150,"move":false},{"type":"point","x":-125,"y":175,"move":false},{"type":"point","x":-75,"y":225,"move":false},{"type":"point","x":-100,"y":200,"move":true},{"type":"point","x":-100,"y":250,"move":false},{"type":"point","x":-125,"y":175,"move":true},{"type":"point","x":-125,"y":250,"move":false},{"type":"point","x":-175,"y":150,"move":true},{"type":"point","x":-175,"y":250,"move":false},{"type":"point","x":-175,"y":200,"move":true},{"type":"point","x":-150,"y":225,"move":false},{"type":"point","x":-150,"y":250,"move":false},{"type":"point","x":-175,"y":175,"move":true},{"type":"point","x":-125,"y":225,"move":false},{"type":"point","x":-200,"y":150,"move":true},{"type":"point","x":-200,"y":200,"move":false},{"type":"point","x":-175,"y":225,"move":false},{"type":"point","x":-200,"y":175,"move":true},{"type":"point","x":-250,"y":225,"move":false},{"type":"point","x":-225,"y":200,"move":true},{"type":"point","x":-200,"y":225,"move":false},{"type":"point","x":-200,"y":250,"move":false},{"type":"point","x":-75,"y":-75,"move":true},{"type":"point","x":-125,"y":-25,"move":false},{"type":"point","x":-225,"y":-25,"move":false},{"type":"point","x":-250,"y":0,"move":false},{"type":"point","x":-150,"y":-25,"move":true},{"type":"point","x":-100,"y":-75,"move":false},{"type":"point","x":-100,"y":-150,"move":false},{"type":"point","x":-75,"y":-175,"move":false},{"type":"point","x":-75,"y":-250,"move":false},{"type":"point","x":-100,"y":-250,"move":true},{"type":"point","x":-100,"y":-175,"move":false},{"type":"point","x":-125,"y":-150,"move":false},{"type":"point","x":-125,"y":-50,"move":false},{"type":"point","x":-125,"y":-125,"move":true},{"type":"point","x":-175,"y":-175,"move":false},{"type":"point","x":-175,"y":-250,"move":false},{"type":"point","x":-150,"y":-150,"move":true},{"type":"point","x":-150,"y":-250,"move":false},{"type":"point","x":-150,"y":-175,"move":true},{"type":"point","x":-125,"y":-200,"move":false},{"type":"point","x":-125,"y":-250,"move":false},{"type":"point","x":-125,"y":-100,"move":true},{"type":"point","x":-200,"y":-175,"move":false},{"type":"point","x":-200,"y":-225,"move":false},{"type":"point","x":-225,"y":-250,"move":false},{"type":"point","x":-125,"y":-75,"move":true},{"type":"point","x":-175,"y":-125,"move":false},{"type":"point","x":-250,"y":-125,"move":false},{"type":"point","x":-200,"y":-125,"move":true},{"type":"point","x":-250,"y":-175,"move":false},{"type":"point","x":-225,"y":-150,"move":true},{"type":"point","x":-225,"y":-200,"move":false},{"type":"point","x":-250,"y":-225,"move":false},{"type":"point","x":-125,"y":-75,"move":true},{"type":"point","x":-225,"y":-75,"move":false},{"type":"point","x":-250,"y":-100,"move":false},{"type":"point","x":-250,"y":-125,"move":true},{"type":"point","x":-200,"y":-75,"move":false},{"type":"point","x":-225,"y":-125,"move":true},{"type":"point","x":-200,"y":-100,"move":false},{"type":"point","x":-150,"y":-100,"move":false},{"type":"point","x":-125,"y":-50,"move":true},{"type":"point","x":-175,"y":-50,"move":false},{"type":"point","x":-200,"y":-25,"move":false},{"type":"point","x":-225,"y":-25,"move":true},{"type":"point","x":-250,"y":-50,"move":false},{"type":"stroke","r":125,"g":125,"b":50},{"type":"point","x":-75,"y":-75,"move":true},{"type":"point","x":-75,"y":75,"move":false},{"type":"point","x":75,"y":75,"move":false},{"type":"point","x":75,"y":-75,"move":false},{"type":"close"},{"type":"fill","r":150,"g":150,"b":100},{"type":"stroke","r":125,"g":125,"b":50}]`
        ), statChange(rarity) {
            stats.projHit = true;
            stats.damage *= 1.2 + 0.05*rarity;
        }
    },{
        name: "Pacemaker",
        desc: "Extra blue health",
        drawPath: JSON.parse(
            `[{"type":"point","x":-150,"y":25},{"type":"point","x":-150,"y":-150},{"type":"point","x":-100,"y":-100},{"type":"point","x":-100,"y":50},{"type":"close"},{"type":"fill","r":150,"g":150,"b":120},{"type":"stroke","r":200,"g":200,"b":200},{"type":"point","x":-150,"y":-150},{"type":"point","x":-125,"y":-175},{"type":"point","x":-75,"y":-200},{"type":"point","x":25,"y":-200},{"type":"point","x":75,"y":-175},{"type":"point","x":100,"y":-150},{"type":"point","x":125,"y":-100},{"type":"point","x":125,"y":125},{"type":"point","x":100,"y":150},{"type":"point","x":50,"y":175},{"type":"point","x":-50,"y":175},{"type":"point","x":-100,"y":150},{"type":"point","x":-100,"y":50},{"type":"point","x":-100,"y":-100},{"type":"close"},{"type":"fill","r":200,"g":200,"b":200},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":0,"y":75},{"type":"point","x":-75,"y":0},{"type":"point","x":-75,"y":-50},{"type":"point","x":-50,"y":-75},{"type":"point","x":-25,"y":-75},{"type":"point","x":0,"y":-50},{"type":"point","x":25,"y":-75},{"type":"point","x":50,"y":-75},{"type":"point","x":75,"y":-50},{"type":"point","x":75,"y":0},{"type":"close"},{"type":"fill","r":200,"g":0,"b":0},{"type":"stroke","r":150,"g":0,"b":0}]`
        ), statChange(rarity) {
            stats.extraHealth += 1 + rarity;
            stats.extraHealthMax = stats.extraHealth;
        }
    },{
        name: "Saw",
        desc: "Reduced accuracy, increased damage",
        drawPath: JSON.parse(
            `[{"type":"point","x":-150,"y":-50},{"type":"point","x":200,"y":-200},{"type":"point","x":225,"y":-125},{"type":"point","x":175,"y":-150},{"type":"point","x":175,"y":-100},{"type":"point","x":125,"y":-125},{"type":"point","x":125,"y":-75},{"type":"point","x":75,"y":-100},{"type":"point","x":75,"y":-50},{"type":"point","x":25,"y":-75},{"type":"point","x":25,"y":-25},{"type":"point","x":-25,"y":-50},{"type":"point","x":-25,"y":0},{"type":"point","x":-75,"y":-25},{"type":"point","x":-75,"y":25},{"type":"point","x":-100,"y":50},{"type":"fill","r":175,"g":175,"b":175},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-150,"y":-50},{"type":"point","x":-100,"y":50},{"type":"point","x":-100,"y":75},{"type":"point","x":-200,"y":125},{"type":"point","x":-250,"y":0},{"type":"close"},{"type":"point","x":-175,"y":0,"move":true},{"type":"point","x":-212.5,"y":12.5,"move":false},{"type":"point","x":-187.5,"y":75,"move":false},{"type":"point","x":-137.5,"y":62.5,"move":false},{"type":"point","x":-125,"y":50,"move":false},{"type":"close"},{"type":"fill","r":125,"g":100,"b":50},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), statChange(rarity) {
            stats.bloom *= 2.5-0.15*rarity;
            stats.damage *= 1.45 + 0.2*rarity;
        }
    },{
        name: "Piercing Rounds",
        desc: "Bullets pierce through enemies",
        drawPath: JSON.parse(
            `[{"type":"point","x":0,"y":-225},{"type":"point","x":-25,"y":-200},{"type":"point","x":-50,"y":-150},{"type":"point","x":-75,"y":-50},{"type":"point","x":75,"y":-50},{"type":"point","x":50,"y":-150},{"type":"point","x":25,"y":-200},{"type":"close"},{"type":"fill","r":100,"g":100,"b":50},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-75,"y":-50},{"type":"point","x":-75,"y":200},{"type":"point","x":-62.5,"y":237.5},{"type":"point","x":-25,"y":250},{"type":"point","x":25,"y":250},{"type":"point","x":62.5,"y":237.5},{"type":"point","x":75,"y":200},{"type":"point","x":75,"y":-50},{"type":"close"},{"type":"fill","r":150,"g":150,"b":50},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-100,"y":25},{"type":"point","x":-100,"y":-50},{"type":"point","x":-75,"y":-150},{"type":"point","x":-50,"y":-200},{"type":"point","x":0,"y":-250},{"type":"point","x":50,"y":-200},{"type":"point","x":75,"y":-150},{"type":"point","x":100,"y":-50},{"type":"point","x":100,"y":25},{"type":"point","x":-125,"y":-50,"move":true},{"type":"point","x":-100,"y":-150,"move":false},{"type":"point","x":-75,"y":-200,"move":false},{"type":"point","x":0,"y":-275,"move":false},{"type":"point","x":75,"y":-200,"move":false},{"type":"point","x":100,"y":-150,"move":false},{"type":"point","x":125,"y":-50,"move":false},{"type":"point","x":-125,"y":-150,"move":true},{"type":"point","x":-100,"y":-200,"move":false},{"type":"point","x":0,"y":-300,"move":false},{"type":"point","x":100,"y":-200,"move":false},{"type":"point","x":125,"y":-150,"move":false},{"type":"stroke","r":175,"g":175,"b":175}]`
        ), statChange(rarity) {
            stats.pierce = (stats.pierce || 0) + 1 + rarity;
            stats.damage *= 1.2 + 0.05*rarity;
        }
    },{
        name: "Can o' Beans",
        desc: "MANY small and less powerful bullets",
        drawPath: JSON.parse(
            `[{"type":"point","x":-50,"y":-250},{"type":"point","x":50,"y":-250},{"type":"point","x":150,"y":-225},{"type":"point","x":200,"y":-200},{"type":"point","x":225,"y":-175},{"type":"point","x":200,"y":-150},{"type":"point","x":150,"y":-125},{"type":"point","x":50,"y":-100},{"type":"point","x":-50,"y":-100},{"type":"point","x":-150,"y":-125},{"type":"point","x":-200,"y":-150},{"type":"point","x":-225,"y":-175},{"type":"point","x":-200,"y":-200},{"type":"point","x":-150,"y":-225},{"type":"close"},{"type":"fill","r":100,"g":100,"b":100},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-225,"y":-175,"move":false},{"type":"point","x":-200,"y":-150,"move":false},{"type":"point","x":-150,"y":-125,"move":false},{"type":"point","x":-50,"y":-100,"move":false},{"type":"point","x":50,"y":-100,"move":false},{"type":"point","x":150,"y":-125,"move":false},{"type":"point","x":200,"y":-150,"move":false},{"type":"point","x":225,"y":-175,"move":false},{"type":"point","x":225,"y":225,"move":false},{"type":"point","x":200,"y":250,"move":false},{"type":"point","x":150,"y":275,"move":false},{"type":"point","x":50,"y":300,"move":false},{"type":"point","x":-50,"y":300,"move":false},{"type":"point","x":-150,"y":275,"move":false},{"type":"point","x":-200,"y":250,"move":false},{"type":"point","x":-225,"y":225,"move":false},{"type":"close"},{"type":"fill","r":100,"g":100,"b":100},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-75,"y":37.5,"move":false},{"type":"point","x":-25,"y":37.5,"move":false},{"type":"point","x":12.5,"y":-12.5,"move":false},{"type":"point","x":75,"y":-50,"move":false},{"type":"point","x":112.5,"y":0,"move":false},{"type":"point","x":100,"y":87.5,"move":false},{"type":"point","x":25,"y":150,"move":false},{"type":"point","x":-100,"y":125,"move":false},{"type":"point","x":-150,"y":87.5,"move":false},{"type":"point","x":-137.5,"y":37.5,"move":false},{"type":"close"},{"type":"fill","r":185,"g":90,"b":65},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-200,"y":-25,"move":false},{"type":"point","x":-200,"y":-175,"move":false},{"type":"point","x":-100,"y":-225,"move":false},{"type":"point","x":0,"y":-237.5,"move":false},{"type":"point","x":112.5,"y":-212.5,"move":false},{"type":"point","x":187.5,"y":-175,"move":false},{"type":"point","x":200,"y":-87.5,"move":false},{"type":"point","x":162.5,"y":-87.5,"move":false},{"type":"point","x":150,"y":-150,"move":false},{"type":"point","x":37.5,"y":-112.5,"move":false},{"type":"point","x":-87.5,"y":-125,"move":false},{"type":"point","x":-100,"y":-25,"move":false},{"type":"point","x":-137.5,"y":-25,"move":false},{"type":"point","x":-150,"y":-75,"move":false},{"type":"point","x":-150,"y":0,"move":false},{"type":"close"},{"type":"fill","r":145,"g":60,"b":35},{"type":"stroke","r":120,"g":55,"b":30},{"type":"close"}]`
        ), statChange(rarity) {
            stats.damage *= 0.15 + rarity*0.02;
            stats.projectiles += 5 + rarity;
            stats.bursts += 1;
            stats.spread *= 0.35;
        }
    }
]

relics.forEach((item) => item.type = "relic");

class Item {
    constructor(x,y,reference, rarity, type) {
        this.x = x || 0;
        this.y = y || 0;
        this.rarity = rarity || 0;
        if (!rarity && rarity !== 0) {
            const random = Math.random();
            if (random < 0.65) this.rarity = 0;
            else if (random < 0.85) this.rarity = 1;
            else if (random < 0.97) this.rarity = 2;
            else if (random < 0.995) this.rarity = 3;
            else this.rarity = 4;
        }
        if (reference) this.reference = reference;
        else if (type) {
            switch(type) {
                case "weapon": {
                    this.reference = weapons[Math.floor(Math.random()*weapons.length)];
                    break;
                }
                case "relic": {
                    this.reference = relics[Math.floor(Math.random()*relics.length)];
                    break;
                }
            }
        }
        else if (Math.random() < 0.12) this.reference = weapons[Math.floor(Math.random()*weapons.length)];
        else this.reference = relics[Math.floor(Math.random()*relics.length)];
    } 
}

let items = [];//new Item(0,0,weapons[2])];

function itemTick() {
    let closestIndex = -1;
    let closestDist = Infinity;
    items.forEach((item, i) => {
        const dist = Math.hypot(player.x-item.x,player.y-item.y);
        if (dist < closestDist && dist < 100) {
            closestDist = dist;
            closestIndex = i;
        }
    });
    items.forEach((item, i) => {
        if (Math.abs(item.x) > 700-50) {
            item.x = Math.sign(item.x)*(700-50);
        }
        if (Math.abs(item.y) > 300-50) {
            item.y = Math.sign(item.y+100)*(300-50);
        }
        blocks.forEach((block) => {
            const diffx = item.x + 50 - block[0];
            const diffy = item.y + 50 - block[1];
            const diffx1 = -item.x + 50 + block[0]+block[2];
            const diffy1 = -item.y + 50 + block[1]+block[3];
            if (diffx > 0 && diffx1 > 0 && diffy > 0 && diffy1 > 0) {
                if (Math.min(diffx, diffx1) < Math.min(diffy,diffy1)) {
                    if (diffx < diffx1) item.x = block[0]-50;
                    else item.x = block[0]+block[2]+50;
                } else {
                    if (diffy < diffy1) item.y = block[1]-50;
                    else item.y = block[1]+block[3]+50;
                }
            }
        })
        ctx.beginPath();
        draw(item.x,item.y,item.reference.drawPath,40+10*(i === closestIndex),Math.sin(player.rotationTick*5)/3);
    })
    items.forEach((item, i) => {
        if (i == closestIndex) drawItemDesc(item);
    })
}

function drawItemDesc(item,x,y) {
        if (x !== undefined) item.x = x;
        if (y !== undefined) item.y = y;
        ctx.beginPath();
        ctx.rect(item.x-150,item.y+100,300,100);
        ctx.fillStyle = "#555";
        ctx.strokeStyle = "#222";
        ctx.fill();
        ctx.stroke();

        ctx.font = "30px Share Tech";
        let name = "";

        switch(item.rarity) {
            case 0: { 
                name += "Common"; 
                ctx.fillStyle = "#999"
                break; 
            }
            case 1: { 
                name += "Uncommon"; 
                ctx.fillStyle = "#5c5"
                break; 
            }
            case 2: { 
                name += "Rare"; 
                ctx.fillStyle = "#57c"
                break; 
            }
            case 3: { 
                name += "Legendary"; 
                ctx.fillStyle = "#cc5"
                break; 
            }
            case 4: { 
                name += "Mythic"; 
                ctx.fillStyle = "#95c"
                break; 
            }
        }

        name += " " + item.reference.name;
        ctx.strokeText(name, item.x,item.y+125);
        ctx.fillText(name, item.x,item.y+125);
        ctx.fillStyle = "#ccc"
        ctx.font = "20px Share Tech";
        ctx.strokeText(item.reference.desc, item.x,item.y+165);
        ctx.fillText(item.reference.desc, item.x,item.y+165);
    }

function updateStats() {
    const health = stats.health || stats.healthMax || 10;
    let extraHealth = stats.extraHealth || stats.extraHealthMax || 4;
    if (stats.extraHealth === 0) extraHealth = 0;
    stats = {
        friction: 0.2,
        bulletSize: 10,
        bulletSpeed: 25,
        firerate: 18,
        damage: 0.325,
        playerSize: 25,
        playerSpeed: 2,
        health: health,
        healthMax: stats.healthMax || 10,
        extraHealth: extraHealth,
        extraHealthMax: 4,
        projectiles: 1, spread: Math.PI/8,
        bursts: 1,
        bloom: Math.PI/65
    }
    if (game.weapon.reference.statChange) game.weapon.reference.statChange(game.weapon.rarity);
    game.relicsEquipped.forEach((relic) => {
        if (relic) if (relic.reference.statChange) relic.reference.statChange(relic.rarity);
    })
}

function pickUpItem() {
    let closestItem = false;
    let closestDist = Infinity;
    let closestIndex = 0;
    items.forEach((item,i) => {
        const dist = Math.hypot(player.x-item.x,player.y-item.y);
        if (dist < closestDist && dist < 100) {
            closestDist = dist;
            closestItem = item;
            closestIndex = i;
        }
    })

    if (closestItem) {
        if (closestItem.reference.type == "weapon") {
            items.push(new Item(player.x, player.y, game.weapon.reference, game.weapon.rarity));
            game.weapon = closestItem;
            items.splice(closestItem,1);

            if (game.deleteItems && ( closestIndex == game.itemPos || closestIndex == game.itemPos+1 ) ) {
                items.splice(game.itemPos,1);
                game.deleteItems = false;
            }

            updateStats();
        } else if (closestItem.reference.type == "relic") {
            let emptyIndex = 0;
            while (game.relicsEquipped[emptyIndex]) emptyIndex++;
            if (emptyIndex >= game.relicsEquipped.length) {
                game.replaceItem = true;
                game.menu = "inventory";

                return;
            };
            game.relicsEquipped[emptyIndex] = closestItem;
            items.splice(closestIndex,1);
            updateStats();

            if (game.deleteItems && ( closestIndex == game.itemPos || closestIndex == game.itemPos+1 ) ) {
                items.splice(game.itemPos,1);
                game.deleteItems = false;
            }
        }
    }
}