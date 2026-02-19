const weapons = [
/*BP*/{
        name: "Basic Gun",
        desc: "Starting gun",
        drawPath: JSON.parse(
            `[{"type":"point","x":200,"y":50,"move":true},{"type":"point","x":250,"y":50},{"type":"point","x":250,"y":-50},{"type":"point","x":200,"y":-50},{"type":"point","x":200,"y":75},{"type":"point","x":-250,"y":75},{"type":"point","x":-250,"y":-75},{"type":"point","x":200,"y":-75},{"type":"close"},{"type":"point","x":-125,"y":75,"move":true},{"type":"point","x":-150,"y":175,"move":false},{"type":"point","x":-200,"y":250,"move":false},{"type":"point","x":-100,"y":250,"move":false},{"type":"point","x":-50,"y":175,"move":false},{"type":"point","x":-25,"y":75,"move":false},{"type":"move"},{"type":"fill","r":125,"g":125,"b":125},{"type":"stroke","r":75,"g":75,"b":75}]`
        ),
        bulletDrawPath: JSON.parse(
            `[{"type":"point","x":-250,"y":0},{"type":"point","x":-175,"y":-175},{"type":"point","x":0,"y":-250},{"type":"point","x":175,"y":-175},{"type":"point","x":250,"y":0},{"type":"point","x":175,"y":175},{"type":"point","x":0,"y":250},{"type":"point","x":-175,"y":175},{"type":"close"},{"type":"fill","r":100,"g":100,"b":100},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), statChange(rarity) {
            stats.damage *= 1.3 + 0.15*rarity;
        }
/*GG*/},{
        name: "Gatling Gun",
        desc: "High Fire rate",
        drawPath: JSON.parse(
            `[{"type":"point","x":300,"y":-50,"move":false},{"type":"point","x":300,"y":50,"move":false},{"type":"point","x":-50,"y":50,"move":false},{"type":"point","x":-50,"y":-50,"move":false},{"type":"close"},{"type":"point","x":250,"y":-50,"move":true},{"type":"point","x":250,"y":-100,"move":false},{"type":"point","x":-50,"y":-100,"move":false},{"type":"point","x":-50,"y":-50,"move":false},{"type":"point","x":-50,"y":50,"move":true},{"type":"point","x":-50,"y":100,"move":false},{"type":"point","x":250,"y":100,"move":false},{"type":"point","x":250,"y":50,"move":false},{"type":"fill","r":175,"g":175,"b":175},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":100,"y":-125,"move":true},{"type":"point","x":100,"y":125,"move":false},{"type":"point","x":50,"y":125,"move":false},{"type":"point","x":50,"y":-125,"move":false},{"type":"close"},{"type":"point","x":-50,"y":-125,"move":true},{"type":"point","x":-50,"y":125,"move":false},{"type":"point","x":-250,"y":125,"move":false},{"type":"point","x":-250,"y":-125,"move":false},{"type":"point","x":-150,"y":-175,"move":false},{"type":"point","x":-75,"y":-175,"move":false},{"type":"point","x":-75,"y":-150,"move":false},{"type":"point","x":-125,"y":-150,"move":false},{"type":"point","x":-175,"y":-125,"move":false},{"type":"close"},{"type":"fill","r":100,"g":100,"b":100},{"type":"stroke","r":50,"g":50,"b":50}]`
        ),
        bulletDrawPath: JSON.parse(
            `[{"type":"point","x":-250,"y":-100},{"type":"point","x":200,"y":-100},{"type":"point","x":300,"y":0},{"type":"point","x":200,"y":100},{"type":"point","x":-250,"y":100},{"type":"close"},{"type":"fill","r":100,"g":100,"b":100},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), statChange(rarity) {
            stats.firerate *= 0.2 - 0.012*rarity;
            stats.damage *= 0.35 + 0.015*rarity;
            stats.bloom *= 3-0.2*rarity;
        }
/*HC*/},{
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
            stats.bulletSize *= 3.5 + 0.75*rarity;
        }
/*SO*/},{
        name: "Sawed Off",
        desc: "High damage, many projectiles",
        drawPath: JSON.parse(
            `[{"type":"point","x":-75,"y":25},{"type":"point","x":-25,"y":-25},{"type":"point","x":-75,"y":-75},{"type":"point","x":225,"y":-75},{"type":"point","x":275,"y":-25},{"type":"point","x":250,"y":0},{"type":"point","x":-50,"y":0},{"type":"point","x":-50,"y":100,"move":true},{"type":"point","x":0,"y":50,"move":false},{"type":"point","x":-50,"y":0,"move":false},{"type":"point","x":250,"y":0,"move":false},{"type":"point","x":300,"y":50,"move":false},{"type":"point","x":250,"y":100,"move":false},{"type":"close"},{"type":"fill","r":100,"g":100,"b":100},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-75,"y":-75,"move":false},{"type":"point","x":-125,"y":-25,"move":false},{"type":"point","x":-75,"y":25,"move":false},{"type":"point","x":-50,"y":0,"move":false},{"type":"point","x":0,"y":50,"move":false},{"type":"point","x":-50,"y":100,"move":false},{"type":"point","x":-100,"y":50,"move":false},{"type":"point","x":-25,"y":-25,"move":false},{"type":"close"},{"type":"fill","r":75,"g":75,"b":75},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-75,"y":-25,"move":false},{"type":"point","x":-50,"y":50,"move":false},{"type":"point","x":-75,"y":100,"move":false},{"type":"point","x":-175,"y":200,"move":false},{"type":"point","x":-200,"y":200,"move":false},{"type":"point","x":-225,"y":175,"move":false},{"type":"point","x":-225,"y":150,"move":false},{"type":"point","x":-125,"y":50,"move":false},{"type":"point","x":-100,"y":-12.5,"move":false},{"type":"close"},{"type":"fill","r":125,"g":100,"b":50},{"type":"stroke","r":50,"g":50,"b":50}]`
        ),
        bulletDrawPath: JSON.parse(
            `[{"type":"point","x":-250,"y":0},{"type":"point","x":-175,"y":-175},{"type":"point","x":0,"y":-250},{"type":"point","x":175,"y":-175},{"type":"point","x":250,"y":0},{"type":"point","x":175,"y":175},{"type":"point","x":0,"y":250},{"type":"point","x":-175,"y":175},{"type":"close"},{"type":"fill","r":100,"g":100,"b":100},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), statChange(rarity) {
            stats.firerate *= 1.25 - 0.03*rarity;
            stats.damage *= 0.85 + 0.2*rarity;
            stats.bulletSize *= 0.9;
            stats.bulletSpeed *= 0.6;
            stats.projectiles += 4;
            stats.bloom *= 2.5;
            stats.spread *= 1.25;
            stats.lifetime = 0.6;
        }
/*RG*/},{
        name: "Railgun",
        desc: "High damage, damage scales with velocity",
        drawPath: JSON.parse(
            `[{"type":"point","x":237.5,"y":-25},{"type":"point","x":225,"y":0},{"type":"point","x":237.5,"y":25},{"type":"point","x":-75,"y":25},{"type":"point","x":-75,"y":-25},{"type":"close"},{"type":"fill","r":125,"g":255,"b":255},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":287.5,"y":25},{"type":"point","x":250,"y":50},{"type":"point","x":225,"y":75},{"type":"point","x":200,"y":87.5},{"type":"point","x":-50,"y":100},{"type":"point","x":-100,"y":75},{"type":"point","x":-200,"y":50},{"type":"point","x":-225,"y":100},{"type":"point","x":-250,"y":175},{"type":"point","x":-275,"y":162.5},{"type":"point","x":-250,"y":75},{"type":"point","x":-237.5,"y":0},{"type":"point","x":-250,"y":-37.5},{"type":"point","x":-225,"y":-50},{"type":"point","x":-100,"y":-75},{"type":"point","x":-50,"y":-100},{"type":"point","x":200,"y":-87.5},{"type":"point","x":225,"y":-75},{"type":"point","x":250,"y":-50},{"type":"point","x":287.5,"y":-25},{"type":"point","x":200,"y":-25},{"type":"point","x":187.5,"y":0},{"type":"point","x":175,"y":-25},{"type":"point","x":75,"y":-25},{"type":"point","x":62.5,"y":0},{"type":"point","x":50,"y":-25},{"type":"point","x":-50,"y":-25},{"type":"point","x":-62.5,"y":0},{"type":"point","x":-50,"y":25},{"type":"point","x":50,"y":25},{"type":"point","x":62.5,"y":0},{"type":"point","x":75,"y":25},{"type":"point","x":175,"y":25},{"type":"point","x":187.5,"y":0},{"type":"point","x":200,"y":25},{"type":"close"},{"type":"fill","r":75,"g":75,"b":100},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":200,"y":-50},{"type":"point","x":-75,"y":-50},{"type":"point","x":-100,"y":0,"move":false},{"type":"point","x":-75,"y":50,"move":false},{"type":"point","x":187.5,"y":50,"move":false},{"type":"point","x":-112.5,"y":-37.5,"move":true},{"type":"point","x":-125,"y":0,"move":false},{"type":"point","x":-112.5,"y":37.5,"move":false},{"type":"point","x":-150,"y":-25,"move":true},{"type":"point","x":-162.5,"y":0,"move":false},{"type":"point","x":-150,"y":25,"move":false},{"type":"point","x":-187.5,"y":-12.5,"move":true},{"type":"point","x":-200,"y":0,"move":false},{"type":"point","x":-187.5,"y":12.5,"move":false},{"type":"stroke","r":125,"g":255,"b":255}]`
        ),
        bulletDrawPath: JSON.parse(
            `[{"type":"point","x":-250,"y":-100},{"type":"point","x":200,"y":-100},{"type":"point","x":300,"y":0},{"type":"point","x":200,"y":100},{"type":"point","x":-250,"y":100},{"type":"close"},{"type":"fill","r":50,"g":150,"b":175},{"type":"stroke","r":50,"g":75,"b":100}]`
        ), statChange(rarity) {
            stats.firerate *= 1.6 - 0.05*rarity;
            stats.damage *= 2.3 + 0.2*rarity;
            stats.bulletSpeed *= 2.5 + 0.15*rarity;
            stats.pierce = 1;
            stats.bulletSize *= 2.5;
            stats.trailColor = "#0cc";
        }, damageBoost(rarity,bullet,enemy) {
            return bullet.speed/50 || 1;
        }
/*GC*/},{
        name: "Gas Can",
        desc: "Lots of low damage bullets",
        drawPath: JSON.parse(
            `[{"type":"point","x":225,"y":-75},{"type":"point","x":225,"y":50},{"type":"point","x":-25,"y":300},{"type":"point","x":-125,"y":300},{"type":"point","x":-300,"y":125},{"type":"point","x":-300,"y":25},{"type":"point","x":-25,"y":-250},{"type":"point","x":50,"y":-250},{"type":"close"},{"type":"point","x":0,"y":100,"move":true},{"type":"point","x":75,"y":75,"move":false},{"type":"point","x":100,"y":0,"move":false},{"type":"point","x":75,"y":-75,"move":false},{"type":"point","x":0,"y":-100,"move":false},{"type":"point","x":-75,"y":-75,"move":false},{"type":"point","x":-100,"y":0,"move":false},{"type":"point","x":-75,"y":75,"move":false},{"type":"close"},{"type":"fill","r":175,"g":75,"b":70},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":175,"y":-125,"move":false},{"type":"point","x":200,"y":-125,"move":false},{"type":"point","x":225,"y":-100,"move":false},{"type":"point","x":250,"y":-100,"move":false},{"type":"point","x":250,"y":75,"move":false},{"type":"point","x":225,"y":75,"move":false},{"type":"point","x":200,"y":100,"move":false},{"type":"point","x":175,"y":100,"move":false},{"type":"close"},{"type":"fill","r":25,"g":25,"b":25},{"type":"stroke","r":50,"g":50,"b":50}]`
        ),
        bulletDrawPath: JSON.parse(
            `[{"type":"point","x":300,"y":0},{"type":"point","x":100,"y":150},{"type":"point","x":-50,"y":50},{"type":"point","x":-250,"y":0},{"type":"point","x":-50,"y":-50},{"type":"point","x":100,"y":-150},{"type":"close"},{"type":"fill","r":255,"g":150,"b":75},{"type":"stroke","r":100,"g":50,"b":50}]`
        ), statChange(rarity) {
            stats.firerate *= 0.11 - 0.017*rarity;
            stats.damage *= 0.15 + 0.05*rarity;
            stats.bulletSpeed *= 0.3;
            stats.bulletSize *= 2;
            stats.projectiles += 1;
            stats.bloom *= 2;
            stats.spread *= 0.3;
            stats.lifetime = 1;
        }
/*PC*/},{
        name: "Playing Cards",
        desc: "3 cards in a shot",
        drawPath: JSON.parse(
            `[{"type":"point","x":-100,"y":150},{"type":"point","x":100,"y":250},{"type":"point","x":300,"y":-150},{"type":"point","x":50,"y":-275},{"type":"point","x":-150,"y":125},{"type":"close"},{"type":"fill","r":0,"g":0,"b":0},{"type":"fill","r":200,"g":200,"b":200},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":150,"y":225,"move":false},{"type":"point","x":-150,"y":225,"move":false},{"type":"point","x":-150,"y":-250,"move":false},{"type":"point","x":150,"y":-250,"move":false},{"type":"close"},{"type":"fill","r":200,"g":200,"b":200},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-100,"y":250,"move":false},{"type":"point","x":150,"y":125,"move":false},{"type":"point","x":-50,"y":-275,"move":false},{"type":"point","x":-300,"y":-150,"move":false},{"type":"close"},{"type":"fill","r":200,"g":200,"b":200},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-75,"y":-237.5,"move":false},{"type":"point","x":-75,"y":-200,"move":false},{"type":"point","x":-50,"y":-175,"move":false},{"type":"point","x":-50,"y":-212.5,"move":false},{"type":"close"},{"type":"point","x":112.5,"y":-212.5,"move":true},{"type":"point","x":100,"y":-225,"move":false},{"type":"point","x":87.5,"y":-212.5,"move":false},{"type":"point","x":112.5,"y":-187.5,"move":false},{"type":"point","x":137.5,"y":-212.5,"move":false},{"type":"point","x":125,"y":-225,"move":false},{"type":"close"},{"type":"point","x":237.5,"y":-112.5,"move":true},{"type":"point","x":237.5,"y":-137.5,"move":false},{"type":"point","x":262.5,"y":-150,"move":false},{"type":"point","x":262.5,"y":-125,"move":false},{"type":"close"},{"type":"point","x":-125,"y":-112.5,"move":true},{"type":"point","x":-125,"y":37.5,"move":false},{"type":"point","x":-12.5,"y":112.5,"move":false},{"type":"point","x":-12.5,"y":-25,"move":false},{"type":"close"},{"type":"fill","r":200,"g":100,"b":100},{"type":"stroke","r":150,"g":50,"b":50}]`
        ),
        bulletDrawPath: JSON.parse(
            `[{"type":"point","x":-250,"y":-175},{"type":"point","x":250,"y":-175},{"type":"point","x":250,"y":175},{"type":"point","x":-250,"y":175},{"type":"close"},{"type":"fill","r":200,"g":200,"b":200},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-175,"y":0,"move":false},{"type":"point","x":0,"y":-100,"move":false},{"type":"point","x":175,"y":0,"move":false},{"type":"point","x":0,"y":100,"move":false},{"type":"close"},{"type":"fill","r":200,"g":100,"b":100},{"type":"stroke","r":100,"g":50,"b":50}]`
        ), statChange(rarity) {
            stats.firerate *= 0.9 - 0.03*rarity;
            stats.damage *= 0.6 + 0.03*rarity;
            stats.bulletSize *= 1.5;
            stats.bulletSpeed *= 0.8;
            stats.projectiles += 2;
            stats.bloom *= 3;
            stats.spread *= 0.3;
            stats.luck++;
        }
/*SI*/},{
        name: "Sickle",
        desc: "Slow, powerful bullets",
        drawPath: JSON.parse(
            `[{"type":"point","x":-250,"y":225},{"type":"point","x":-225,"y":250},{"type":"point","x":-25,"y":50},{"type":"point","x":-50,"y":0},{"type":"point","x":-50,"y":-50},{"type":"point","x":-25,"y":-100},{"type":"point","x":25,"y":-125},{"type":"point","x":75,"y":-125},{"type":"point","x":125,"y":-100},{"type":"point","x":150,"y":-50},{"type":"point","x":150,"y":0},{"type":"point","x":125,"y":50},{"type":"point","x":175,"y":0},{"type":"point","x":175,"y":-50},{"type":"point","x":150,"y":-125},{"type":"point","x":75,"y":-162.5},{"type":"point","x":25,"y":-162.5},{"type":"point","x":-62.5,"y":-137.5},{"type":"point","x":-100,"y":-50},{"type":"point","x":-100,"y":0},{"type":"point","x":-75,"y":50},{"type":"close"},{"type":"fill","r":150,"g":150,"b":150},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-237.5,"y":187.5},{"type":"point","x":-187.5,"y":237.5},{"type":"point","x":-62.5,"y":112.5},{"type":"point","x":-112.5,"y":62.5},{"type":"close"},{"type":"fill","r":75,"g":50,"b":25},{"type":"stroke","r":50,"g":50,"b":50}]`
        ),
        bulletDrawPath: JSON.parse(
            `[{"type":"point","x":-125,"y":-125},{"type":"point","x":0,"y":-175},{"type":"point","x":125,"y":-125},{"type":"point","x":175,"y":0},{"type":"point","x":125,"y":125},{"type":"point","x":0,"y":175},{"type":"point","x":-125,"y":125},{"type":"point","x":-100,"y":175},{"type":"point","x":0,"y":225},{"type":"point","x":100,"y":225},{"type":"point","x":200,"y":175},{"type":"point","x":250,"y":75},{"type":"point","x":262.5,"y":0},{"type":"point","x":250,"y":-75},{"type":"point","x":200,"y":-175},{"type":"point","x":100,"y":-225},{"type":"point","x":0,"y":-225},{"type":"point","x":-100,"y":-175},{"type":"close"},{"type":"fill","r":200,"g":200,"b":200},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), statChange(rarity) {
            stats.firerate *= 2.5 - 0.08*rarity;
            stats.damage *= 3.4 + 0.3*rarity;
            stats.bulletSize *= 5;
            stats.bulletSpeed *= 0.15;
        }
/*GU*/},{
        name: "Guitar",
        desc: "Bulllets pop with AoE",
        drawPath: JSON.parse(
            `[{"type":"point","x":-225,"y":225},{"type":"point","x":-250,"y":175},{"type":"point","x":-250,"y":100},{"type":"point","x":-225,"y":50},{"type":"point","x":-175,"y":0},{"type":"point","x":-125,"y":0},{"type":"point","x":-100,"y":-25},{"type":"point","x":-75,"y":-75},{"type":"point","x":-25,"y":-100},{"type":"point","x":25,"y":-100},{"type":"point","x":62.5,"y":-87.5},{"type":"point","x":225,"y":-250},{"type":"point","x":250,"y":-225},{"type":"point","x":87.5,"y":-62.5},{"type":"point","x":100,"y":-25},{"type":"point","x":100,"y":25},{"type":"point","x":75,"y":75},{"type":"point","x":25,"y":100},{"type":"point","x":0,"y":125},{"type":"point","x":0,"y":175},{"type":"point","x":-50,"y":225},{"type":"point","x":-100,"y":250},{"type":"point","x":-175,"y":250},{"type":"close"},{"type":"point","x":-50,"y":25,"move":true},{"type":"point","x":-100,"y":25,"move":false},{"type":"point","x":-125,"y":50,"move":false},{"type":"point","x":-125,"y":100,"move":false},{"type":"point","x":-100,"y":125,"move":false},{"type":"point","x":-50,"y":125,"move":false},{"type":"point","x":-25,"y":100,"move":false},{"type":"point","x":-25,"y":50,"move":false},{"type":"close"},{"type":"fill","r":175,"g":150,"b":100},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":150,"y":-200,"move":false},{"type":"point","x":225,"y":-275,"move":false},{"type":"point","x":275,"y":-225,"move":false},{"type":"point","x":200,"y":-150,"move":false},{"type":"close"},{"type":"point","x":-187.5,"y":137.5,"move":true},{"type":"point","x":-175,"y":125,"move":false},{"type":"point","x":-137.5,"y":162.5,"move":false},{"type":"point","x":-150,"y":175,"move":false},{"type":"close"},{"type":"fill","r":75,"g":50,"b":0},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":200,"y":-237.5,"move":false},{"type":"point","x":-175,"y":125,"move":false},{"type":"point","x":212.5,"y":-225,"move":true},{"type":"point","x":-162.5,"y":137.5,"move":false},{"type":"point","x":225,"y":-212.5,"move":true},{"type":"point","x":-150,"y":150,"move":false},{"type":"point","x":237.5,"y":-200,"move":true},{"type":"point","x":-137.5,"y":162.5,"move":false},{"type":"stroke","r":125,"g":125,"b":125}]`
        ),
        bulletDrawPath: JSON.parse(
            `[{"type":"point","x":-125,"y":-225},{"type":"point","x":-50,"y":-250},{"type":"point","x":-25,"y":-300},{"type":"point","x":50,"y":-300},{"type":"point","x":50,"y":75},{"type":"point","x":100,"y":75},{"type":"point","x":150,"y":100},{"type":"point","x":175,"y":150},{"type":"point","x":175,"y":200},{"type":"point","x":150,"y":250},{"type":"point","x":100,"y":275},{"type":"point","x":50,"y":275},{"type":"point","x":0,"y":250},{"type":"point","x":-25,"y":200},{"type":"point","x":-25,"y":-200},{"type":"point","x":-100,"y":-175},{"type":"point","x":-150,"y":-200},{"type":"close"},{"type":"fill","r":50,"g":150,"b":250},{"type":"stroke","r":50,"g":50,"b":150}]`
        ),
        explosionPath: JSON.parse(
            `[{"type":"point","x":-50,"y":-250},{"type":"point","x":50,"y":-250},{"type":"point","x":175,"y":-200,"move":false},{"type":"point","x":200,"y":-175,"move":false},{"type":"point","x":250,"y":-50,"move":false},{"type":"point","x":250,"y":50,"move":false},{"type":"point","x":200,"y":175,"move":false},{"type":"point","x":175,"y":200,"move":false},{"type":"point","x":50,"y":250,"move":false},{"type":"point","x":-50,"y":250,"move":false},{"type":"point","x":-175,"y":200,"move":false},{"type":"point","x":-200,"y":175,"move":false},{"type":"point","x":-250,"y":50,"move":false},{"type":"point","x":-250,"y":-50,"move":false},{"type":"point","x":-200,"y":-175,"move":false},{"type":"point","x":-175,"y":-200,"move":false},{"type":"close"},{"type":"point","x":-50,"y":-200,"move":true},{"type":"point","x":-150,"y":-150,"move":false},{"type":"point","x":-200,"y":-50,"move":false},{"type":"point","x":-200,"y":50,"move":false},{"type":"point","x":-150,"y":150,"move":false},{"type":"point","x":-50,"y":200,"move":false},{"type":"point","x":50,"y":200,"move":false},{"type":"point","x":150,"y":150,"move":false},{"type":"point","x":200,"y":50,"move":false},{"type":"point","x":200,"y":-62.5,"move":false},{"type":"point","x":150,"y":-150,"move":false},{"type":"point","x":50,"y":-200,"move":false},{"type":"close"},{"type":"fill","r":50,"g":150,"b":250},{"type":"stroke","r":50,"g":50,"b":150}]`
        ), statChange(rarity) {
            stats.firerate *= 1.5 - 0.08*rarity;
            stats.damage *= 0.85 + 0.05*rarity;
            stats.bulletSize *= 2;
            stats.bulletSpeed *= 0.85;
            stats.lifetime = 0.5;
        }, expiration(rarity,bullet) {
            bulletBuffer.push(new Bullet({
                x:bullet.x,y:bullet.y,
                damage:bullet.damage*(1 + rarity/10),size:bullet.size*(6 + 2*rarity),
                speed:0, drawPath: this.explosionPath, lifetime: 0.1, pierce: Infinity, wallPierce: true,
            }))
        }
/*SH*/},{
        name: "Sledgehammer",
        desc: "Large melee attack with massive damage",
        drawPath: JSON.parse(
            `[{"type":"point","x":-250,"y":225},{"type":"point","x":225,"y":-250},{"type":"point","x":250,"y":-225},{"type":"point","x":-225,"y":250},{"type":"close"},{"type":"fill","r":125,"g":125,"b":50},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":125,"y":-225},{"type":"point","x":225,"y":-125},{"type":"point","x":275,"y":-175},{"type":"point","x":175,"y":-275},{"type":"close"},{"type":"fill","r":75,"g":75,"b":75},{"type":"stroke","r":50,"g":50,"b":50}]`
        ),
        bulletDrawPath: JSON.parse(
            `[{"type":"point","x":0,"y":-250},{"type":"point","x":-187.5,"y":-187.5},{"type":"point","x":-250,"y":0},{"type":"point","x":-187.5,"y":187.5},{"type":"point","x":0,"y":250},{"type":"point","x":187.5,"y":187.5},{"type":"point","x":250,"y":0},{"type":"point","x":187.5,"y":-187.5},{"type":"close"},{"type":"fill","r":225,"g":175,"b":100},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-100,"y":-100},{"type":"point","x":0,"y":-137.5},{"type":"point","x":100,"y":-100},{"type":"point","x":137.5,"y":0},{"type":"point","x":100,"y":100},{"type":"point","x":0,"y":137.5},{"type":"point","x":-100,"y":100},{"type":"point","x":-137.5,"y":0},{"type":"close"},{"type":"fill","r":250,"g":150,"b":100},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), statChange(rarity) {
            stats.firerate *= 4 - 0.08*rarity;
            stats.damage *= 6 + 1*rarity;
            stats.bulletSize *= 17 + 3*rarity;
            stats.bulletSpeed *= 0.25;
            stats.lifetime = 0.1;
            stats.pierce = 5;
            stats.wallPierce = true;
        }
/*SC*/},{
        name: "Scientific Calculator",
        desc: "Bullets travel in sine waves with pierce",
        drawPath: JSON.parse(
            `[{"type":"point","x":-200,"y":-225},{"type":"point","x":-175,"y":-250},{"type":"point","x":175,"y":-250},{"type":"point","x":200,"y":-225},{"type":"point","x":200,"y":225},{"type":"point","x":175,"y":250},{"type":"point","x":-175,"y":250},{"type":"point","x":-200,"y":225},{"type":"close"},{"type":"fill","r":175,"g":175,"b":175},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-150,"y":175},{"type":"point","x":150,"y":175},{"type":"point","x":150,"y":125},{"type":"point","x":-150,"y":125},{"type":"point","x":-150,"y":75},{"type":"point","x":150,"y":75},{"type":"point","x":150,"y":25},{"type":"point","x":-150,"y":25},{"type":"point","x":-150,"y":-25},{"type":"point","x":150,"y":-25},{"type":"point","x":150,"y":-75},{"type":"point","x":100,"y":-75},{"type":"point","x":100,"y":225},{"type":"point","x":50,"y":225},{"type":"point","x":50,"y":-75},{"type":"point","x":0,"y":-75},{"type":"point","x":0,"y":225},{"type":"point","x":-50,"y":225},{"type":"point","x":-50,"y":-75},{"type":"point","x":-100,"y":-75},{"type":"point","x":-100,"y":225},{"type":"point","x":-150,"y":225},{"type":"close"},{"type":"fill","r":25,"g":25,"b":25},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-175,"y":-100},{"type":"point","x":-175,"y":-200},{"type":"point","x":-150,"y":-225},{"type":"point","x":150,"y":-225},{"type":"point","x":175,"y":-200},{"type":"point","x":175,"y":-100},{"type":"close"},{"type":"fill","r":100,"g":150,"b":100},{"type":"stroke","r":50,"g":50,"b":50}]`
        ),
        bulletDrawPath: JSON.parse(
            `[{"type":"point","x":-250,"y":225},{"type":"point","x":-37.5,"y":12.5},{"type":"point","x":-275,"y":-225},{"type":"point","x":-175,"y":-225},{"type":"point","x":12.5,"y":-37.5},{"type":"point","x":200,"y":-225},{"type":"point","x":250,"y":-225},{"type":"point","x":37.5,"y":-12.5},{"type":"point","x":275,"y":225},{"type":"point","x":175,"y":225},{"type":"point","x":-12.5,"y":37.5},{"type":"point","x":-200,"y":225},{"type":"close"},{"type":"fill","r":25,"g":25,"b":25},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), statChange(rarity) {
            stats.firerate *= 0.7 - 0.08*rarity;
            stats.damage *= 1.15 + 0.08*rarity;
            stats.trailColor = "#0c0";
            stats.trailLength = 15;
            stats.pierce = 1;
            stats.sineWaveMovement = true;
        }
/*SP*/},{
        name: "Spear", melee: true,
        desc: "Short Fast attacks",
        drawPath: JSON.parse(
            `[{"type":"point","x":-506.25,"y":-28.125},{"type":"point","x":450,"y":-28.125},{"type":"point","x":450,"y":28.125},{"type":"point","x":-506.25,"y":28.125},{"type":"close"},{"type":"fill","r":75,"g":50,"b":0},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-562.5,"y":0},{"type":"point","x":-506.25,"y":-56.25},{"type":"point","x":-450,"y":0},{"type":"point","x":-506.25,"y":56.25},{"type":"close"},{"type":"point","x":281.25,"y":0,"move":true},{"type":"point","x":450,"y":-112.5,"move":false},{"type":"point","x":421.875,"y":-56.25,"move":false},{"type":"point","x":478.125,"y":-28.125,"move":false},{"type":"point","x":675,"y":0,"move":false},{"type":"point","x":478.125,"y":28.125,"move":false},{"type":"point","x":421.875,"y":56.25,"move":false},{"type":"point","x":450,"y":112.5,"move":false},{"type":"close"},{"type":"fill","r":175,"g":175,"b":175},{"type":"stroke","r":50,"g":50,"b":50}]`
        ),
        bulletDrawPath: JSON.parse(
            `[{"type":"point","x":250,"y":0},{"type":"point","x":-100,"y":-250},{"type":"point","x":-250,"y":-250},{"type":"point","x":-100,"y":0},{"type":"point","x":-250,"y":250},{"type":"point","x":-100,"y":250},{"type":"close"},{"type":"fill","r":175,"g":175,"b":175},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), statChange(rarity) {
            stats.damage *= 1.35 + 0.1*rarity;
            stats.firerate *= 0.65;
            stats.trailColor = "#999";
            stats.trailLength = 7;
            stats.pierce = 1;
            stats.lifetime = 0.3;
            stats.bulletSpeed *= 2.5;
            stats.bulletSize *= 2.5;
        }
/*SC*/},{
        name: "Scythe",
        desc: "Wave of projectiles",
        drawPath: JSON.parse(
            `[{"type":"point","x":-300,"y":-262.5,"move":false},{"type":"point","x":-262.5,"y":-300,"move":false},{"type":"point","x":300,"y":262.5,"move":false},{"type":"point","x":262.5,"y":300,"move":false},{"type":"close"},{"type":"fill","r":75,"g":50,"b":0},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":187.5,"y":300,"move":false},{"type":"point","x":300,"y":187.5,"move":false},{"type":"point","x":337.5,"y":75,"move":false},{"type":"point","x":337.5,"y":-37.5,"move":false},{"type":"point","x":300,"y":-112.5,"move":false},{"type":"point","x":262.5,"y":75,"move":false},{"type":"point","x":225,"y":150,"move":false},{"type":"point","x":150,"y":225,"move":false},{"type":"close"},{"type":"fill","r":100,"g":100,"b":100},{"type":"stroke","r":50,"g":50,"b":50}]`
        ),
        bulletDrawPath: JSON.parse(
            `[{"type":"point","x":187.5,"y":-75},{"type":"point","x":187.5,"y":75},{"type":"point","x":150,"y":187.5},{"type":"point","x":75,"y":300},{"type":"point","x":0,"y":262.5},{"type":"point","x":75,"y":150},{"type":"point","x":112.5,"y":0},{"type":"point","x":75,"y":-150},{"type":"point","x":0,"y":-262.5},{"type":"point","x":75,"y":-300},{"type":"point","x":150,"y":-187.5},{"type":"close"},{"type":"fill","r":175,"g":175,"b":175},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), statChange(rarity) {
            stats.damage *= 1.5 + 0.1*rarity;
            stats.firerate *= 3;
            stats.bulletSpeed *= 0.35;
            stats.bulletSize *= 3;
            stats.projectiles *= 6;
            stats.spread *= 3;
        }
/*CB*/},{
        name: "Can o' Beans",
        desc: "MANY small and less powerful bullets",
        drawPath: JSON.parse(
            `[{"type":"point","x":-50,"y":-250},{"type":"point","x":50,"y":-250},{"type":"point","x":150,"y":-225},{"type":"point","x":200,"y":-200},{"type":"point","x":225,"y":-175},{"type":"point","x":200,"y":-150},{"type":"point","x":150,"y":-125},{"type":"point","x":50,"y":-100},{"type":"point","x":-50,"y":-100},{"type":"point","x":-150,"y":-125},{"type":"point","x":-200,"y":-150},{"type":"point","x":-225,"y":-175},{"type":"point","x":-200,"y":-200},{"type":"point","x":-150,"y":-225},{"type":"close"},{"type":"fill","r":100,"g":100,"b":100},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-225,"y":-175,"move":false},{"type":"point","x":-200,"y":-150,"move":false},{"type":"point","x":-150,"y":-125,"move":false},{"type":"point","x":-50,"y":-100,"move":false},{"type":"point","x":50,"y":-100,"move":false},{"type":"point","x":150,"y":-125,"move":false},{"type":"point","x":200,"y":-150,"move":false},{"type":"point","x":225,"y":-175,"move":false},{"type":"point","x":225,"y":225,"move":false},{"type":"point","x":200,"y":250,"move":false},{"type":"point","x":150,"y":275,"move":false},{"type":"point","x":50,"y":300,"move":false},{"type":"point","x":-50,"y":300,"move":false},{"type":"point","x":-150,"y":275,"move":false},{"type":"point","x":-200,"y":250,"move":false},{"type":"point","x":-225,"y":225,"move":false},{"type":"close"},{"type":"fill","r":100,"g":100,"b":100},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-75,"y":37.5,"move":false},{"type":"point","x":-25,"y":37.5,"move":false},{"type":"point","x":12.5,"y":-12.5,"move":false},{"type":"point","x":75,"y":-50,"move":false},{"type":"point","x":112.5,"y":0,"move":false},{"type":"point","x":100,"y":87.5,"move":false},{"type":"point","x":25,"y":150,"move":false},{"type":"point","x":-100,"y":125,"move":false},{"type":"point","x":-150,"y":87.5,"move":false},{"type":"point","x":-137.5,"y":37.5,"move":false},{"type":"close"},{"type":"fill","r":185,"g":90,"b":65},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-200,"y":-25,"move":false},{"type":"point","x":-200,"y":-175,"move":false},{"type":"point","x":-100,"y":-225,"move":false},{"type":"point","x":0,"y":-237.5,"move":false},{"type":"point","x":112.5,"y":-212.5,"move":false},{"type":"point","x":187.5,"y":-175,"move":false},{"type":"point","x":200,"y":-87.5,"move":false},{"type":"point","x":162.5,"y":-87.5,"move":false},{"type":"point","x":150,"y":-150,"move":false},{"type":"point","x":37.5,"y":-112.5,"move":false},{"type":"point","x":-87.5,"y":-125,"move":false},{"type":"point","x":-100,"y":-25,"move":false},{"type":"point","x":-137.5,"y":-25,"move":false},{"type":"point","x":-150,"y":-75,"move":false},{"type":"point","x":-150,"y":0,"move":false},{"type":"close"},{"type":"fill","r":145,"g":60,"b":35},{"type":"stroke","r":120,"g":55,"b":30},{"type":"close"}]`
        ),
        bulletDrawPath: JSON.parse(
           `[{"type":"point","x":0,"y":125},{"type":"point","x":-175,"y":200},{"type":"point","x":-300,"y":0},{"type":"point","x":-100,"y":-200},{"type":"point","x":100,"y":-200},{"type":"point","x":300,"y":0},{"type":"point","x":175,"y":200},{"type":"close"},{"type":"fill","r":100,"g":60,"b":0},{"type":"stroke","r":50,"g":30,"b":0}]`
        ), statChange(rarity) {
            stats.damage *= 0.45;
            stats.projectiles += 3 + rarity;
            stats.bursts += 1;
            stats.spread *= 0.75;
            stats.bulletSize *= 0.85;
        }
/*KA*/},{
        name: "Katana",
        desc: "Large high damage shots",
        drawPath: JSON.parse(
            `[{"type":"point","x":-356.25,"y":187.5},{"type":"point","x":-337.5,"y":225},{"type":"point","x":-225,"y":187.5},{"type":"point","x":-150,"y":150},{"type":"point","x":-168.75,"y":112.5},{"type":"point","x":-243.75,"y":150},{"type":"close"},{"type":"fill","r":30,"g":30,"b":30},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-168.75,"y":112.5},{"type":"point","x":150,"y":-75},{"type":"point","x":262.5,"y":-187.5},{"type":"point","x":318.75,"y":-300},{"type":"point","x":318.75,"y":-243.75},{"type":"point","x":281.25,"y":-150},{"type":"point","x":168.75,"y":-37.5},{"type":"point","x":-150,"y":150},{"type":"close"},{"type":"fill","r":150,"g":150,"b":150},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-206.25,"y":93.75},{"type":"point","x":-168.75,"y":75},{"type":"point","x":-112.5,"y":168.75},{"type":"point","x":-150,"y":187.5},{"type":"close"},{"type":"fill","r":100,"g":100,"b":100},{"type":"stroke","r":50,"g":50,"b":50}]`
        ),
        bulletDrawPath: JSON.parse(
            `[{"type":"point","x":125,"y":-50},{"type":"point","x":125,"y":50},{"type":"point","x":100,"y":125},{"type":"point","x":50,"y":200},{"type":"point","x":0,"y":175},{"type":"point","x":50,"y":100},{"type":"point","x":75,"y":0},{"type":"point","x":50,"y":-100},{"type":"point","x":0,"y":-175},{"type":"point","x":50,"y":-200},{"type":"point","x":100,"y":-125},{"type":"close"},{"type":"fill","r":175,"g":175,"b":175},{"type":"stroke","r":80,"g":80,"b":80}]`
        ), statChange(rarity) {
            stats.firerate *= 1.7 - 0.1*rarity;
            stats.damage *= 3 + 0.35*rarity;
            stats.bulletSize *= 5 + rarity;
            stats.bulletSpeed *= 0.35;
            stats.pierce = 2;
        }
    }
]

weapons.forEach((item) => {
    item.type = "weapon"
    Object.keys(item).forEach((item2) => {
        if (typeof item[item2] == "function") item[item2] = item[item2].bind(item);
    })
});

const relics = [
/*GP*/{
        name: "Growth Pill",
        desc: "Increases bullet size & Damage",
        drawPath: JSON.parse(
            `[{"type":"point","x":-200,"y":200},{"type":"point","x":-225,"y":150},{"type":"point","x":-225,"y":50},{"type":"point","x":-175,"y":-25},{"type":"point","x":-100,"y":-100},{"type":"point","x":100,"y":100},{"type":"point","x":25,"y":175},{"type":"point","x":-50,"y":225},{"type":"point","x":-150,"y":225},{"type":"close"},{"type":"fill","r":175,"g":100,"b":100},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-100,"y":-100},{"type":"point","x":100,"y":100},{"type":"point","x":175,"y":25},{"type":"point","x":225,"y":-50},{"type":"point","x":225,"y":-150},{"type":"point","x":200,"y":-200},{"type":"point","x":150,"y":-225},{"type":"point","x":50,"y":-225},{"type":"point","x":-25,"y":-175},{"type":"close"},{"type":"fill","r":175,"g":175,"b":100},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), statChange(rarity) {
            stats.damage *= 1.20 + 0.1*rarity;
            stats.bulletSize *= 1.60 + 0.40*rarity;
        }
/*SR*/},{
        name: "Sluggish Rounds",
        desc: "Increased bullet damage, reduced speed",
        drawPath: JSON.parse(
            `[{"type":"point","x":-225,"y":-75},{"type":"point","x":-200,"y":-100},{"type":"point","x":-150,"y":-125},{"type":"point","x":-100,"y":-125},{"type":"point","x":-75,"y":-100},{"type":"point","x":-50,"y":-50},{"type":"point","x":-75,"y":-25},{"type":"point","x":-125,"y":0},{"type":"point","x":-175,"y":0},{"type":"point","x":-200,"y":-25},{"type":"close"},{"type":"point","x":-125,"y":-200},{"type":"point","x":-50,"y":-250},{"type":"point","x":25,"y":-275},{"type":"point","x":50,"y":-275},{"type":"point","x":50,"y":-250},{"type":"point","x":25,"y":-150},{"type":"point","x":-50,"y":-50},{"type":"fill","r":100,"g":100,"b":100},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":0,"y":-125},{"type":"point","x":50,"y":-100},{"type":"point","x":100,"y":-125},{"type":"point","x":150,"y":-75},{"type":"point","x":100,"y":0},{"type":"point","x":25,"y":25},{"type":"point","x":-25,"y":75},{"type":"point","x":0,"y":125},{"type":"point","x":50,"y":100},{"type":"point","x":50,"y":100,"move":true},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":50,"y":100,"move":false},{"type":"point","x":75,"y":50,"move":false},{"type":"point","x":125,"y":25,"move":false},{"type":"point","x":175,"y":50,"move":false},{"type":"point","x":200,"y":100,"move":false},{"type":"point","x":175,"y":150,"move":false},{"type":"point","x":125,"y":175,"move":false},{"type":"point","x":75,"y":150,"move":false},{"type":"close"},{"type":"fill","r":25,"g":25,"b":25},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), statChange(rarity) {
            stats.damage *= 1.35 + 0.20*rarity;
            stats.bulletSpeed *= 0.35 + 0.05*rarity;
        }
/*IC*/},{
        name: "Ice Cube",
        desc: "Increases movement speed",
        drawPath: JSON.parse(
            `[{"type":"point","x":-50,"y":-200},{"type":"point","x":-200,"y":-125},{"type":"point","x":25,"y":-50},{"type":"point","x":175,"y":-125},{"type":"close"},{"type":"point","x":-200,"y":-125,"move":true},{"type":"point","x":-200,"y":100,"move":false},{"type":"point","x":25,"y":175,"move":false},{"type":"point","x":25,"y":-50,"move":false},{"type":"point","x":25,"y":175,"move":false},{"type":"point","x":175,"y":100,"move":false},{"type":"point","x":175,"y":-125,"move":false},{"type":"fill","r":100,"g":150,"b":175},{"type":"stroke","r":50,"g":100,"b":150},{"type":"point","x":-200,"y":25,"move":false},{"type":"point","x":-225,"y":50,"move":false},{"type":"point","x":-250,"y":125,"move":false},{"type":"point","x":-175,"y":200,"move":false},{"type":"point","x":25,"y":250,"move":false},{"type":"point","x":175,"y":225,"move":false},{"type":"point","x":250,"y":150,"move":false},{"type":"point","x":250,"y":75,"move":false},{"type":"point","x":200,"y":25,"move":false},{"type":"point","x":175,"y":25,"move":false},{"type":"point","x":175,"y":100,"move":false},{"type":"point","x":25,"y":175,"move":false},{"type":"point","x":-200,"y":100,"move":false},{"type":"close"},{"type":"fill","r":100,"g":150,"b":175},{"type":"stroke","r":50,"g":100,"b":150}]`
        ), statChange(rarity) {
            stats.friction *= 0.95-0.05*rarity;
            stats.playerSpeed *= 1.2+0.1*rarity;
            stats.bulletSpeed *= 1.1+0.1*rarity;
        }
/*AI*/},{
        name: "After Images",
        desc: "Increases fire rate but reduces damage",
        drawPath: JSON.parse(
            `[{"type":"point","x":-275,"y":-25},{"type":"point","x":-250,"y":-100},{"type":"point","x":-200,"y":-150},{"type":"point","x":-125,"y":-175},{"type":"point","x":-75,"y":-175},{"type":"point","x":0,"y":-150},{"type":"point","x":50,"y":-100},{"type":"point","x":75,"y":-25},{"type":"point","x":75,"y":25},{"type":"point","x":50,"y":100},{"type":"point","x":0,"y":150},{"type":"point","x":-75,"y":175},{"type":"point","x":-125,"y":175},{"type":"point","x":-200,"y":150},{"type":"point","x":-250,"y":100},{"type":"point","x":-275,"y":25},{"type":"close"},{"type":"fill","r":175,"g":200,"b":250},{"type":"stroke","r":50,"g":100,"b":150},{"type":"point","x":0,"y":-150},{"type":"point","x":-75,"y":-125},{"type":"point","x":-125,"y":-75},{"type":"point","x":-150,"y":0},{"type":"point","x":-125,"y":75},{"type":"point","x":-75,"y":125},{"type":"point","x":0,"y":150},{"type":"point","x":75,"y":125},{"type":"point","x":125,"y":75},{"type":"point","x":150,"y":0},{"type":"point","x":125,"y":-75},{"type":"point","x":75,"y":-125},{"type":"close"},{"type":"fill","r":75,"g":125,"b":125},{"type":"stroke","r":50,"g":100,"b":150},{"type":"point","x":150,"y":-125},{"type":"point","x":200,"y":-100},{"type":"point","x":225,"y":-75},{"type":"point","x":250,"y":-25},{"type":"point","x":250,"y":25},{"type":"point","x":225,"y":75},{"type":"point","x":200,"y":100},{"type":"point","x":150,"y":125},{"type":"point","x":100,"y":125},{"type":"point","x":50,"y":100},{"type":"point","x":25,"y":75},{"type":"point","x":0,"y":25},{"type":"point","x":0,"y":-25},{"type":"point","x":25,"y":-75},{"type":"point","x":50,"y":-100},{"type":"point","x":100,"y":-125},{"type":"close"},{"type":"fill","r":50,"g":125,"b":125},{"type":"stroke","r":50,"g":100,"b":125}]`
        ), statChange(rarity) {
            stats.firerate *= 0.65-0.07*rarity;
            stats.damage *= 0.85+0.03*rarity;
        }
/*RF*/},{
        name: "Rifling",
        desc: "Increases damage and bullet speed",
        drawPath: JSON.parse(
            `[{"type":"point","x":-250,"y":-50},{"type":"point","x":-225,"y":-150},{"type":"point","x":-150,"y":-225},{"type":"point","x":-50,"y":-250},{"type":"point","x":50,"y":-250},{"type":"point","x":150,"y":-225},{"type":"point","x":225,"y":-150},{"type":"point","x":250,"y":-50},{"type":"point","x":250,"y":50},{"type":"point","x":225,"y":150},{"type":"point","x":150,"y":225},{"type":"point","x":50,"y":250},{"type":"point","x":-50,"y":250},{"type":"point","x":-150,"y":225},{"type":"point","x":-225,"y":150},{"type":"point","x":-250,"y":50},{"type":"close"},{"type":"fill","r":100,"g":100,"b":100},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-250,"y":-50,"move":false},{"type":"point","x":-125,"y":-125,"move":false},{"type":"point","x":-50,"y":-125,"move":false},{"type":"point","x":25,"y":-100,"move":false},{"type":"point","x":50,"y":-50,"move":false},{"type":"point","x":25,"y":0,"move":false},{"type":"point","x":0,"y":0,"move":false},{"type":"point","x":25,"y":-50,"move":false},{"type":"point","x":0,"y":-75,"move":false},{"type":"point","x":-75,"y":-100,"move":false},{"type":"point","x":-175,"y":-50,"move":false},{"type":"point","x":-250,"y":50,"move":false},{"type":"close"},{"type":"point","x":50,"y":-250,"move":true},{"type":"point","x":125,"y":-125,"move":false},{"type":"point","x":125,"y":-50,"move":false},{"type":"point","x":100,"y":25,"move":false},{"type":"point","x":50,"y":50,"move":false},{"type":"point","x":0,"y":25,"move":false},{"type":"point","x":0,"y":0,"move":false},{"type":"point","x":50,"y":25,"move":false},{"type":"point","x":75,"y":0,"move":false},{"type":"point","x":100,"y":-75,"move":false},{"type":"point","x":50,"y":-175,"move":false},{"type":"point","x":-50,"y":-250,"move":false},{"type":"close"},{"type":"point","x":250,"y":50,"move":true},{"type":"point","x":125,"y":125,"move":false},{"type":"point","x":50,"y":125,"move":false},{"type":"point","x":-25,"y":100,"move":false},{"type":"point","x":-50,"y":50,"move":false},{"type":"point","x":-25,"y":0,"move":false},{"type":"point","x":0,"y":0,"move":false},{"type":"point","x":-25,"y":50,"move":false},{"type":"point","x":0,"y":75,"move":false},{"type":"point","x":75,"y":100,"move":false},{"type":"point","x":175,"y":50,"move":false},{"type":"point","x":250,"y":-50,"move":false},{"type":"close"},{"type":"point","x":-50,"y":250,"move":true},{"type":"point","x":-125,"y":125,"move":false},{"type":"point","x":-125,"y":50,"move":false},{"type":"point","x":-100,"y":-25,"move":false},{"type":"point","x":-50,"y":-50,"move":false},{"type":"point","x":0,"y":-25,"move":false},{"type":"point","x":0,"y":0,"move":false},{"type":"point","x":-50,"y":-25,"move":false},{"type":"point","x":-75,"y":0,"move":false},{"type":"point","x":-100,"y":75,"move":false},{"type":"point","x":-50,"y":175,"move":false},{"type":"point","x":50,"y":250,"move":false},{"type":"close"},{"type":"fill","r":25,"g":25,"b":25},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), statChange(rarity) {
            stats.damage *= 1.25 + 0.1*rarity;
            stats.bulletSpeed *= 1.55 + 0.1*rarity;
            stats.bloom *= 0.8;
        }
/*LT*/},{
        name: "Lottery Ticket",
        desc: "Chance for bullets to have massive damage",
        drawPath: JSON.parse(
            `[{"type":"point","x":-250,"y":-125},{"type":"point","x":250,"y":-250},{"type":"point","x":250,"y":125},{"type":"point","x":-250,"y":250},{"type":"close"},{"type":"fill","r":225,"g":220,"b":175},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-150,"y":175,"move":false},{"type":"point","x":-200,"y":150,"move":false},{"type":"point","x":-225,"y":100,"move":false},{"type":"point","x":-200,"y":50,"move":false},{"type":"point","x":-150,"y":25,"move":false},{"type":"point","x":-100,"y":50,"move":false},{"type":"point","x":-75,"y":100,"move":false},{"type":"point","x":-100,"y":150,"move":false},{"type":"close"},{"type":"point","x":0,"y":125,"move":true},{"type":"point","x":-50,"y":100,"move":false},{"type":"point","x":-75,"y":50,"move":false},{"type":"point","x":-50,"y":0,"move":false},{"type":"point","x":0,"y":-25,"move":false},{"type":"point","x":50,"y":0,"move":false},{"type":"point","x":75,"y":50,"move":false},{"type":"point","x":50,"y":100,"move":false},{"type":"close"},{"type":"point","x":75,"y":0,"move":true},{"type":"point","x":100,"y":50,"move":false},{"type":"point","x":150,"y":75,"move":false},{"type":"point","x":200,"y":50,"move":false},{"type":"point","x":225,"y":0,"move":false},{"type":"point","x":200,"y":-50,"move":false},{"type":"point","x":150,"y":-75,"move":false},{"type":"point","x":100,"y":-50,"move":false},{"type":"close"},{"type":"fill","r":200,"g":200,"b":200},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-150,"y":-100,"move":true},{"type":"point","x":-125,"y":0,"move":false},{"type":"point","x":-100,"y":-75,"move":false},{"type":"point","x":-75,"y":-25,"move":false},{"type":"point","x":-75,"y":-125,"move":false},{"type":"point","x":-50,"y":-25,"move":true},{"type":"point","x":50,"y":-75,"move":false},{"type":"point","x":0,"y":-50,"move":false},{"type":"point","x":0,"y":-150,"move":false},{"type":"point","x":-50,"y":-125,"move":true},{"type":"point","x":50,"y":-175,"move":false},{"type":"point","x":75,"y":-75,"move":true},{"type":"point","x":75,"y":-175,"move":false},{"type":"point","x":150,"y":-100,"move":false},{"type":"point","x":150,"y":-200,"move":false},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), onSpawn(rarity,bullet) {
            if (random() < 0.025 + 0.01*rarity) {
                bullet.damage *= 30 + 5*rarity;
                bullet.size *= 2.2;
                bullet.size *= 1.3;
                bullet.jackpot = true;
            }
        }
/*PM*/},{
        name: "Pacemaker",
        desc: "Extra blue health",
        drawPath: JSON.parse(
            `[{"type":"point","x":-150,"y":25},{"type":"point","x":-150,"y":-150},{"type":"point","x":-100,"y":-100},{"type":"point","x":-100,"y":50},{"type":"close"},{"type":"fill","r":150,"g":150,"b":120},{"type":"stroke","r":200,"g":200,"b":200},{"type":"point","x":-150,"y":-150},{"type":"point","x":-125,"y":-175},{"type":"point","x":-75,"y":-200},{"type":"point","x":25,"y":-200},{"type":"point","x":75,"y":-175},{"type":"point","x":100,"y":-150},{"type":"point","x":125,"y":-100},{"type":"point","x":125,"y":125},{"type":"point","x":100,"y":150},{"type":"point","x":50,"y":175},{"type":"point","x":-50,"y":175},{"type":"point","x":-100,"y":150},{"type":"point","x":-100,"y":50},{"type":"point","x":-100,"y":-100},{"type":"close"},{"type":"fill","r":200,"g":200,"b":200},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":0,"y":75},{"type":"point","x":-75,"y":0},{"type":"point","x":-75,"y":-50},{"type":"point","x":-50,"y":-75},{"type":"point","x":-25,"y":-75},{"type":"point","x":0,"y":-50},{"type":"point","x":25,"y":-75},{"type":"point","x":50,"y":-75},{"type":"point","x":75,"y":-50},{"type":"point","x":75,"y":0},{"type":"close"},{"type":"fill","r":200,"g":0,"b":0},{"type":"stroke","r":150,"g":0,"b":0}]`
        ), statChange(rarity) {
            stats.extraHealth += 1 + rarity;
            stats.extraHealthMax += 1 + rarity;
        }
/*HC*/},{
        name: "Heart Container",
        desc: "Extra red health",
        drawPath: JSON.parse(
            `[{"type":"point","x":0,"y":250},{"type":"point","x":-225,"y":25},{"type":"point","x":-250,"y":-50},{"type":"point","x":-250,"y":-125},{"type":"point","x":-225,"y":-200},{"type":"point","x":-200,"y":-225},{"type":"point","x":-125,"y":-250},{"type":"point","x":-75,"y":-250},{"type":"point","x":-25,"y":-225},{"type":"point","x":0,"y":-200},{"type":"point","x":25,"y":-225},{"type":"point","x":75,"y":-250},{"type":"point","x":125,"y":-250},{"type":"point","x":200,"y":-225},{"type":"point","x":225,"y":-200},{"type":"point","x":250,"y":-125},{"type":"point","x":250,"y":-50},{"type":"point","x":225,"y":25},{"type":"close"},{"type":"fill","r":150,"g":75,"b":75},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-250,"y":-50},{"type":"point","x":-175,"y":-75},{"type":"point","x":-125,"y":-75},{"type":"point","x":-50,"y":-50},{"type":"point","x":-25,"y":-25},{"type":"point","x":50,"y":0},{"type":"point","x":100,"y":0},{"type":"point","x":175,"y":-25},{"type":"point","x":200,"y":-50},{"type":"point","x":250,"y":-75},{"type":"point","x":250,"y":-50},{"type":"point","x":225,"y":25},{"type":"point","x":0,"y":250},{"type":"point","x":-225,"y":25},{"type":"close"},{"type":"fill","r":200,"g":50,"b":50},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), statChange(rarity) {
            stats.health += 4 + 3*rarity;
            stats.healthMax += 4 + 3*rarity;
        }
/*SW*/},{
        name: "Saw",
        desc: "Reduced accuracy, increased damage",
        drawPath: JSON.parse(
            `[{"type":"point","x":-150,"y":-50},{"type":"point","x":200,"y":-200},{"type":"point","x":225,"y":-125},{"type":"point","x":175,"y":-150},{"type":"point","x":175,"y":-100},{"type":"point","x":125,"y":-125},{"type":"point","x":125,"y":-75},{"type":"point","x":75,"y":-100},{"type":"point","x":75,"y":-50},{"type":"point","x":25,"y":-75},{"type":"point","x":25,"y":-25},{"type":"point","x":-25,"y":-50},{"type":"point","x":-25,"y":0},{"type":"point","x":-75,"y":-25},{"type":"point","x":-75,"y":25},{"type":"point","x":-100,"y":50},{"type":"fill","r":175,"g":175,"b":175},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-150,"y":-50},{"type":"point","x":-100,"y":50},{"type":"point","x":-100,"y":75},{"type":"point","x":-200,"y":125},{"type":"point","x":-250,"y":0},{"type":"close"},{"type":"point","x":-175,"y":0,"move":true},{"type":"point","x":-212.5,"y":12.5,"move":false},{"type":"point","x":-187.5,"y":75,"move":false},{"type":"point","x":-137.5,"y":62.5,"move":false},{"type":"point","x":-125,"y":50,"move":false},{"type":"close"},{"type":"fill","r":125,"g":100,"b":50},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), statChange(rarity) {
            stats.bloom *= 3.5-0.15*rarity;
            stats.damage *= 1.45 + 0.2*rarity;
        }
/*BS*/},{
        name: "Blue Scale",
        desc: "Chance to gain blue health when you lose red health",
        drawPath: JSON.parse(
            `[{"type":"point","x":-250,"y":0},{"type":"point","x":-150,"y":25},{"type":"point","x":-100,"y":50},{"type":"point","x":-50,"y":100},{"type":"point","x":-25,"y":150},{"type":"point","x":0,"y":250},{"type":"point","x":125,"y":125},{"type":"point","x":200,"y":0},{"type":"point","x":225,"y":-150},{"type":"point","x":225,"y":-225},{"type":"point","x":150,"y":-225},{"type":"point","x":0,"y":-200},{"type":"point","x":-125,"y":-125},{"type":"close"},{"type":"fill","r":40,"g":115,"b":170},{"type":"stroke","r":50,"g":75,"b":75},{"type":"point","x":-200,"y":-12.5},{"type":"point","x":-125,"y":0},{"type":"point","x":-50,"y":50},{"type":"point","x":0,"y":125},{"type":"point","x":0,"y":200},{"type":"point","x":150,"y":25},{"type":"point","x":200,"y":-125},{"type":"point","x":200,"y":-200},{"type":"point","x":125,"y":-200},{"type":"point","x":-25,"y":-150},{"type":"close"},{"type":"fill","r":45,"g":140,"b":175}]`
        ), onPlayerHit(rarity, enemy) {
            if (random() < (0.15 + rarity*0.07) && stats.extraHealth == 0) stats.extraHealth++;
        }
/*SW*/},{
        name: "Stopwatch",
        desc: "increased I-Frame length when taking damage",
        drawPath: JSON.parse(
            `[{"type":"point","x":75,"y":-150},{"type":"point","x":125,"y":-250},{"type":"point","x":175,"y":-225},{"type":"point","x":125,"y":-125},{"type":"fill","r":150,"g":150,"b":50},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":0,"y":-225},{"type":"point","x":162.5,"y":-162.5},{"type":"point","x":225,"y":0},{"type":"point","x":162.5,"y":162.5},{"type":"point","x":0,"y":225},{"type":"point","x":-162.5,"y":162.5},{"type":"point","x":-225,"y":0},{"type":"point","x":-162.5,"y":-162.5},{"type":"close"},{"type":"fill","r":150,"g":150,"b":75},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":50,"y":-162.5},{"type":"point","x":0,"y":-12.5},{"type":"point","x":50,"y":100},{"type":"stroke","r":20,"g":20,"b":20}]`
        ), statChange(rarity) {
            stats.extraIframes = (stats.extraIframes || 0) + 75 + 30*rarity;
        }
/*SH*/},{
        name: "Shadow",
        desc: "Added bursts, reduced firerate",
        drawPath: JSON.parse(
            `[{"type":"point","x":-75,"y":-175,"move":false},{"type":"point","x":0,"y":-200,"move":false},{"type":"point","x":25,"y":-200,"move":false},{"type":"point","x":25,"y":-175,"move":false},{"type":"point","x":0,"y":-100,"move":false},{"type":"point","x":-25,"y":-75,"move":false},{"type":"point","x":-25,"y":-125,"move":false},{"type":"point","x":-50,"y":-150,"move":false},{"type":"point","x":-100,"y":-150,"move":false},{"type":"close"},{"type":"point","x":-225,"y":-25,"move":true},{"type":"point","x":-175,"y":-25,"move":false},{"type":"point","x":-150,"y":0,"move":false},{"type":"point","x":-150,"y":50,"move":false},{"type":"point","x":-200,"y":50,"move":false},{"type":"point","x":-225,"y":25,"move":false},{"type":"close"},{"type":"fill","r":75,"g":75,"b":75},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-225,"y":-25,"move":false},{"type":"point","x":-100,"y":-150,"move":false},{"type":"point","x":-50,"y":-150,"move":false},{"type":"point","x":-25,"y":-125,"move":false},{"type":"point","x":-25,"y":-75,"move":false},{"type":"point","x":-150,"y":50,"move":false},{"type":"point","x":-150,"y":0,"move":false},{"type":"point","x":-175,"y":-25,"move":false},{"type":"close"},{"type":"fill","r":100,"g":100,"b":100},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-50,"y":150,"move":false},{"type":"point","x":-50,"y":200,"move":false},{"type":"point","x":-25,"y":225,"move":false},{"type":"point","x":25,"y":225,"move":false},{"type":"point","x":175,"y":75,"move":false},{"type":"point","x":200,"y":0,"move":false},{"type":"point","x":200,"y":-25,"move":false},{"type":"point","x":175,"y":-25,"move":false},{"type":"point","x":100,"y":0,"move":false},{"type":"close"},{"type":"fill","r":25,"g":25,"b":25},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), statChange(rarity) {
            stats.bursts += 1 + rarity;
            stats.firerate *= 1.25;
        }
/*TR*/},{
        name: "Trident",
        desc: "Increased projectile count, reduced damage",
        drawPath: JSON.parse(
            `[{"type":"point","x":-25,"y":250},{"type":"point","x":-25,"y":25},{"type":"point","x":-150,"y":75},{"type":"point","x":-150,"y":-100},{"type":"point","x":-125,"y":-200},{"type":"point","x":-100,"y":-100},{"type":"point","x":-100,"y":0},{"type":"point","x":-25,"y":-25},{"type":"point","x":-25,"y":-150},{"type":"point","x":0,"y":-250},{"type":"point","x":25,"y":-150},{"type":"point","x":25,"y":-25},{"type":"point","x":100,"y":0},{"type":"point","x":100,"y":-100},{"type":"point","x":125,"y":-200},{"type":"point","x":150,"y":-100},{"type":"point","x":150,"y":75},{"type":"point","x":25,"y":25},{"type":"point","x":25,"y":250},{"type":"fill","r":100,"g":145,"b":175},{"type":"stroke","r":50,"g":75,"b":100}]`
        ), statChange(rarity) {
            stats.projectiles += 1 + rarity;
            stats.damage *= 0.8;
        }
/*CB*/},{
        name: "Crowbar",
        desc: "Increased damage to enemies above 75% health",
        drawPath: JSON.parse(
            `[{"type":"point","x":-250,"y":225},{"type":"point","x":-200,"y":175},{"type":"point","x":75,"y":-200},{"type":"point","x":125,"y":-225},{"type":"point","x":150,"y":-225},{"type":"point","x":187.5,"y":-200},{"type":"point","x":200,"y":-150},{"type":"point","x":187.5,"y":-125},{"type":"point","x":175,"y":-175},{"type":"point","x":150,"y":-187.5},{"type":"point","x":112.5,"y":-175},{"type":"point","x":-175,"y":200},{"type":"close"},{"type":"fill","r":255,"g":75,"b":75},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), damageBoost(rarity,bullet,enemy) {
            if (enemy.health/enemy.healthMax > 0.75) return 1.75 + 0.15*rarity;
            else return 1;
        }
/*GU*/},{
        name: "Guillotine",
        desc: "Increased damage to enemies below 50% health",
        drawPath: JSON.parse(
            `[{"type":"point","x":-150,"y":250},{"type":"point","x":-150,"y":-250},{"type":"point","x":-125,"y":-250},{"type":"point","x":-125,"y":-225},{"type":"point","x":125,"y":-225},{"type":"point","x":125,"y":-250},{"type":"point","x":150,"y":-250},{"type":"point","x":150,"y":250},{"type":"point","x":125,"y":250},{"type":"point","x":125,"y":225},{"type":"point","x":-125,"y":225},{"type":"point","x":-125,"y":250},{"type":"point","x":-125,"y":125,"move":true},{"type":"point","x":-50,"y":125,"move":false},{"type":"point","x":-25,"y":150,"move":false},{"type":"point","x":25,"y":150,"move":false},{"type":"point","x":50,"y":125,"move":false},{"type":"point","x":125,"y":125,"move":false},{"type":"point","x":125,"y":-200,"move":false},{"type":"point","x":-125,"y":-200,"move":false},{"type":"close"},{"type":"fill","r":150,"g":100,"b":75},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-125,"y":-200,"move":false},{"type":"point","x":-125,"y":-100,"move":false},{"type":"point","x":50,"y":-125,"move":false},{"type":"point","x":100,"y":-150,"move":false},{"type":"point","x":125,"y":-175,"move":false},{"type":"point","x":125,"y":-200,"move":false},{"type":"close"},{"type":"fill","r":200,"g":200,"b":200},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), damageBoost(rarity,bullet,enemy) {
            if (enemy.health/enemy.healthMax < 0.5) return 1.5 + 0.1*rarity;
            else return 1;
        }
/*BH*/},{
        name: "Bull's Horn",
        desc: "Increased damage at or below 4 health",
        drawPath: JSON.parse(
            `[{"type":"point","x":-175,"y":100},{"type":"point","x":-125,"y":100},{"type":"point","x":-100,"y":125},{"type":"point","x":-100,"y":175},{"type":"point","x":-150,"y":175},{"type":"point","x":-175,"y":150},{"type":"point","x":-175,"y":100},{"type":"point","x":-75,"y":0},{"type":"point","x":-25,"y":-75},{"type":"point","x":-12.5,"y":-150},{"type":"point","x":-25,"y":-200},{"type":"point","x":-50,"y":-225},{"type":"point","x":0,"y":-212.5},{"type":"point","x":25,"y":-175},{"type":"point","x":50,"y":-75},{"type":"point","x":37.5,"y":-25},{"type":"point","x":0,"y":50},{"type":"point","x":-100,"y":175},{"type":"fill","r":135,"g":100,"b":100},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-150,"y":175},{"type":"point","x":-100,"y":175},{"type":"point","x":-100,"y":125},{"type":"point","x":-125,"y":100},{"type":"point","x":-175,"y":100},{"type":"point","x":-175,"y":150},{"type":"close"},{"type":"fill","r":25,"g":25,"b":25},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), damageBoost(rarity,bullet,enemy) {
            if (stats.health <= 4) return 2 + 0.25*rarity;
            else return 1;
        }
/*SG*/},{
        name: "Stun Gun",
        desc: "Stuns enemies and adds flat damage",
        drawPath: JSON.parse(
            `[{"type":"point","x":-250,"y":-150,"move":false},{"type":"point","x":-175,"y":-175,"move":false},{"type":"point","x":200,"y":-50,"move":false},{"type":"point","x":200,"y":100,"move":false},{"type":"point","x":125,"y":125,"move":false},{"type":"point","x":125,"y":-25,"move":false},{"type":"point","x":-250,"y":-150,"move":false},{"type":"point","x":-250,"y":0,"move":false},{"type":"point","x":125,"y":125,"move":false},{"type":"point","x":125,"y":-25,"move":false},{"type":"fill","r":75,"g":75,"b":75},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":125,"y":-25,"move":false},{"type":"point","x":200,"y":-50,"move":false},{"type":"point","x":200,"y":100,"move":false},{"type":"point","x":125,"y":125,"move":false},{"type":"close"},{"type":"point","x":-100,"y":50,"move":true},{"type":"point","x":-100,"y":200,"move":false},{"type":"point","x":-175,"y":175,"move":false},{"type":"point","x":-175,"y":25,"move":false},{"type":"point","x":-100,"y":50,"move":false},{"type":"point","x":-25,"y":75,"move":false},{"type":"point","x":-25,"y":175,"move":false},{"type":"point","x":-100,"y":200,"move":false},{"type":"fill","r":20,"g":20,"b":20},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-200,"y":-62.5,"move":false},{"type":"point","x":-75,"y":25,"move":false},{"type":"point","x":-75,"y":-50,"move":false},{"type":"point","x":75,"y":37.5,"move":false},{"type":"fill","r":150,"g":150,"b":0},{"type":"stroke","r":175,"g":175,"b":50}]`
        ), onHit(rarity,bullet,enemy) {
            const velChange = Math.max(0,1-(0.3-0.05*rarity)*bullet.damage/enemy.health*50);
            enemy.vx *= velChange;
            enemy.vy *= velChange;
            enemy.health -= 0.1 + 0.05*rarity;
            if (game.showDamageNumbers) dmgNumbers.push(new DamageNumber(bullet.x,bullet.y,0.1 + 0.05*rarity));
        }
/*SB*/},{
        name: "Silver Bullet",
        desc: "Chance to crit damage",
        drawPath: JSON.parse(
            `[{"type":"point","x":-25,"y":250},{"type":"point","x":-75,"y":225},{"type":"point","x":-75,"y":-100},{"type":"point","x":-50,"y":-200},{"type":"point","x":0,"y":-250},{"type":"point","x":50,"y":-200},{"type":"point","x":75,"y":-100},{"type":"point","x":75,"y":225},{"type":"point","x":25,"y":250},{"type":"point","x":-25,"y":250},{"type":"point","x":75,"y":-100,"move":true},{"type":"point","x":0,"y":-87.5,"move":false},{"type":"point","x":-75,"y":-100,"move":false},{"type":"fill","r":200,"g":200,"b":200},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":75,"y":-225,"move":false},{"type":"point","x":50,"y":-125,"move":false},{"type":"point","x":-50,"y":-100,"move":false},{"type":"point","x":50,"y":-75,"move":false},{"type":"point","x":75,"y":25,"move":false},{"type":"point","x":100,"y":-75,"move":false},{"type":"point","x":200,"y":-100,"move":false},{"type":"point","x":100,"y":-125,"move":false},{"type":"close"},{"type":"fill","r":255,"g":255,"b":255},{"type":"stroke","r":200,"g":200,"b":200}]`
        ), damageBoost(rarity,bullet,enemy) {
            if (random() < 0.25) {
                effects.push(new Effect(bullet.x,bullet.y,"silver",20,20));
                return 2 + 0.2*rarity;
            } else return 1;
        }
/*DB*/},{
        name: "Demonic Bracelet",
        desc: "Increased Damage, reduced max health",
        drawPath: JSON.parse(
            `[{"type":"point","x":-50,"y":-150},{"type":"point","x":50,"y":-150},{"type":"point","x":150,"y":-125},{"type":"point","x":200,"y":-75},{"type":"point","x":225,"y":-25},{"type":"point","x":225,"y":0},{"type":"point","x":200,"y":50},{"type":"point","x":150,"y":100},{"type":"point","x":50,"y":125},{"type":"point","x":-50,"y":125},{"type":"point","x":-150,"y":100},{"type":"point","x":-200,"y":50},{"type":"point","x":-225,"y":0},{"type":"point","x":-225,"y":-25},{"type":"point","x":-200,"y":-75},{"type":"point","x":-150,"y":-125},{"type":"close"},{"type":"point","x":-100,"y":-100,"move":true},{"type":"point","x":-137.5,"y":-75,"move":false},{"type":"point","x":-175,"y":-50,"move":false},{"type":"point","x":-187.5,"y":-12.5,"move":false},{"type":"point","x":-175,"y":25,"move":false},{"type":"point","x":-100,"y":75,"move":false},{"type":"point","x":0,"y":87.5,"move":false},{"type":"point","x":100,"y":75,"move":false},{"type":"point","x":175,"y":25,"move":false},{"type":"point","x":187.5,"y":-12.5,"move":false},{"type":"point","x":175,"y":-50,"move":false},{"type":"point","x":100,"y":-100,"move":false},{"type":"point","x":0,"y":-112.5,"move":false},{"type":"close"},{"type":"point","x":-175,"y":-100,"move":true},{"type":"point","x":-175,"y":-175,"move":false},{"type":"point","x":-125,"y":-125,"move":false},{"type":"point","x":125,"y":-125,"move":true},{"type":"point","x":175,"y":-175,"move":false},{"type":"point","x":175,"y":-100,"move":false},{"type":"fill","r":255,"g":50,"b":50},{"type":"stroke","r":50,"g":0,"b":0}]`
        ), statChange(rarity) {
            stats.damage *= 1.4 + 0.2*rarity;
            stats.health -= 4;
            stats.healthMax -= 4;
        }
/*HP*/},{
        name: "Hollow Point",
        desc: "Increased damage up-close",
        drawPath: JSON.parse(
            `[{"type":"point","x":-25,"y":250},{"type":"point","x":-75,"y":225},{"type":"point","x":-100,"y":200},{"type":"point","x":-100,"y":-100},{"type":"point","x":-75,"y":-200},{"type":"point","x":0,"y":-250},{"type":"point","x":75,"y":-200},{"type":"point","x":100,"y":-100},{"type":"point","x":100,"y":200},{"type":"point","x":75,"y":225},{"type":"point","x":25,"y":250},{"type":"close"},{"type":"fill","r":100,"g":100,"b":100},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":100,"y":-100,"move":true},{"type":"point","x":75,"y":-125,"move":false},{"type":"point","x":25,"y":-150,"move":false},{"type":"point","x":-25,"y":-150,"move":false},{"type":"point","x":-75,"y":-125,"move":false},{"type":"point","x":-100,"y":-100,"move":false},{"type":"fill","r":100,"g":100,"b":100},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":100,"y":200,"move":false},{"type":"point","x":75,"y":225,"move":false},{"type":"point","x":25,"y":250,"move":false},{"type":"point","x":-25,"y":250,"move":false},{"type":"point","x":-75,"y":225,"move":false},{"type":"point","x":-100,"y":200,"move":false},{"type":"point","x":-75,"y":175,"move":false},{"type":"point","x":-25,"y":150,"move":false},{"type":"point","x":25,"y":150,"move":false},{"type":"point","x":75,"y":175,"move":false},{"type":"close"},{"type":"fill","r":150,"g":150,"b":150},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), damageBoost(rarity,bullet,enemy) {
            if (Math.hypot(player.x-bullet.x,player.y-bullet.y) < 300) return 1.55 + 0.2*rarity;
            else return 1;
        }
/*RD*/},{
        name: "Red Dot",
        desc: "Increased damage far away",
        drawPath: JSON.parse(
            `[{"type":"point","x":0,"y":-250},{"type":"point","x":175,"y":-175},{"type":"point","x":250,"y":0},{"type":"point","x":175,"y":175},{"type":"point","x":0,"y":250},{"type":"point","x":-175,"y":175},{"type":"point","x":-250,"y":0},{"type":"point","x":-175,"y":-175},{"type":"close"},{"type":"point","x":0,"y":-200,"move":true},{"type":"point","x":-137.5,"y":-137.5,"move":false},{"type":"point","x":-200,"y":0,"move":false},{"type":"point","x":-137.5,"y":137.5,"move":false},{"type":"point","x":0,"y":200,"move":false},{"type":"point","x":137.5,"y":137.5,"move":false},{"type":"point","x":200,"y":0,"move":false},{"type":"point","x":137.5,"y":-137.5,"move":false},{"type":"close"},{"type":"fill","r":75,"g":75,"b":75},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":0,"y":-75,"move":false},{"type":"point","x":-50,"y":-50,"move":false},{"type":"point","x":-75,"y":0,"move":false},{"type":"point","x":-50,"y":50,"move":false},{"type":"point","x":0,"y":75,"move":false},{"type":"point","x":50,"y":50,"move":false},{"type":"point","x":75,"y":0,"move":false},{"type":"point","x":50,"y":-50,"move":false},{"type":"close"},{"type":"fill","r":200,"g":50,"b":50},{"type":"stroke","r":75,"g":0,"b":0}]`
        ), damageBoost(rarity,bullet,enemy) {
            const dist = Math.hypot(player.x-bullet.x,player.y-bullet.y);
            if (dist > 300) return 1 + dist*(0.001 + 0.0003*rarity);
            else return 1;
        }
/*RP*/},{
        name: "Red Pen",
        desc: "Increased damage the more red health you have",
        drawPath: JSON.parse(
            `[{"type":"point","x":-200,"y":-175},{"type":"point","x":-125,"y":-100},{"type":"point","x":-100,"y":-125},{"type":"point","x":-175,"y":-200},{"type":"close"},{"type":"point","x":-200,"y":-150,"move":false},{"type":"point","x":-150,"y":-100,"move":true},{"type":"point","x":-200,"y":-150,"move":false},{"type":"point","x":125,"y":150,"move":true},{"type":"point","x":200,"y":200,"move":false},{"type":"point","x":150,"y":125,"move":false},{"type":"close"},{"type":"fill","r":100,"g":100,"b":100},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-125,"y":-100,"move":false},{"type":"point","x":125,"y":150,"move":false},{"type":"point","x":150,"y":125,"move":false},{"type":"point","x":-100,"y":-125,"move":false},{"type":"point","x":-125,"y":-100,"move":false},{"type":"fill","r":255,"g":50,"b":50},{"type":"stroke","r":80,"g":40,"b":40}]`
        ), damageBoost(rarity,bullet,enemy) {
            return 1 + stats.health*(0.04 + 0.02 * rarity);
        }
/*SP*/},{
        name: "Spectacles",
        desc: "First shot in each room has MASSIVE damage",
        drawPath: JSON.parse(
            `[{"type":"point","x":-250,"y":-50},{"type":"point","x":-100,"y":100},{"type":"point","x":200,"y":-50},{"type":"point","x":50,"y":-200},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":50,"y":25,"move":false},{"type":"point","x":-100,"y":100,"move":false},{"type":"point","x":-100,"y":150,"move":false},{"type":"point","x":-75,"y":175,"move":false},{"type":"point","x":-50,"y":175,"move":false},{"type":"point","x":25,"y":137.5,"move":false},{"type":"point","x":50,"y":100,"move":false},{"type":"point","x":50,"y":25,"move":false},{"type":"point","x":200,"y":-50,"move":false},{"type":"point","x":200,"y":25,"move":false},{"type":"point","x":175,"y":62.5,"move":false},{"type":"point","x":100,"y":100,"move":false},{"type":"point","x":75,"y":100,"move":false},{"type":"point","x":50,"y":75,"move":false},{"type":"point","x":50,"y":25,"move":false},{"type":"fill","r":200,"g":75,"b":75},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), statChange(rarity) {
            stats.spectacleScale = (stats.spectacleScale || 0) + 15 + 8*rarity;
            stats.spectacleAmount = (stats.spectacleAmount || 0) + 1;
        }, onSpawn(rarity,bullet) {
            if (bullet.firstBullet) {
                bullet.firstBullet = false;
                effects.push(new Effect(bullet.x,bullet.y,"glasses",50,30));
                bullet.damage *= stats.spectacleScale/stats.spectacleAmount;
            }
        }
/*BW*/},{
        name: "Barbed Wire",
        desc: "+1 damage taken, increased damage dealt",
        drawPath: JSON.parse(
            `[{"type":"point","x":-250,"y":200},{"type":"point","x":0,"y":50},{"type":"point","x":175,"y":-87.5},{"type":"point","x":250,"y":-250},{"type":"point","x":-75,"y":-75,"move":true},{"type":"point","x":-62.5,"y":12.5,"move":false},{"type":"point","x":150,"y":25,"move":false},{"type":"point","x":175,"y":137.5,"move":false},{"type":"point","x":25,"y":137.5,"move":true},{"type":"point","x":137.5,"y":25,"move":false},{"type":"point","x":75,"y":-112.5,"move":false},{"type":"point","x":112.5,"y":-150,"move":false},{"type":"point","x":-37.5,"y":-50,"move":true},{"type":"point","x":87.5,"y":-12.5,"move":false},{"type":"point","x":12.5,"y":100,"move":false},{"type":"point","x":100,"y":175,"move":false},{"type":"point","x":-25,"y":187.5,"move":true},{"type":"point","x":-25,"y":62.5,"move":false},{"type":"point","x":-125,"y":-12.5,"move":false},{"type":"point","x":-87.5,"y":75,"move":true},{"type":"point","x":-75,"y":175,"move":false},{"type":"point","x":12.5,"y":0,"move":false},{"type":"point","x":87.5,"y":-50,"move":false},{"type":"point","x":112.5,"y":-125,"move":false},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), statChange(rarity) {
            stats.extraReceivedDamage = (stats.extraReceivedDamage || 0) + 1;
            stats.damage *= 1.6 + 0.15*rarity;
        }
/*BG*/},{
        name: "Broken Glass",
        desc: "Massive damage boost, when hit: chance this relic breaks",
        drawPath: JSON.parse(
            `[{"type":"point","x":-125,"y":125},{"type":"point","x":-87.5,"y":12.5},{"type":"point","x":-112.5,"y":-87.5},{"type":"point","x":-62.5,"y":-162.5},{"type":"point","x":-50,"y":-250},{"type":"point","x":12.5,"y":-187.5},{"type":"point","x":37.5,"y":-112.5},{"type":"point","x":137.5,"y":-75},{"type":"point","x":187.5,"y":-37.5},{"type":"point","x":200,"y":37.5},{"type":"point","x":137.5,"y":87.5},{"type":"point","x":150,"y":175},{"type":"point","x":75,"y":175},{"type":"point","x":-25,"y":137.5},{"type":"point","x":-75,"y":100},{"type":"close"},{"type":"point","x":-150,"y":112.5,"move":true},{"type":"point","x":-112.5,"y":25,"move":false},{"type":"point","x":-150,"y":-112.5,"move":false},{"type":"point","x":-162.5,"y":-12.5,"move":false},{"type":"close"},{"type":"point","x":-150,"y":162.5,"move":true},{"type":"point","x":-75,"y":112.5,"move":false},{"type":"point","x":50,"y":200,"move":false},{"type":"point","x":162.5,"y":212.5,"move":false},{"type":"point","x":0,"y":225,"move":false},{"type":"point","x":-87.5,"y":187.5,"move":false},{"type":"close"},{"type":"point","x":-50,"y":225,"move":true},{"type":"point","x":-225,"y":225,"move":false},{"type":"point","x":-225,"y":62.5,"move":false},{"type":"point","x":-175,"y":175,"move":false},{"type":"close"},{"type":"point","x":-175,"y":112.5,"move":true},{"type":"point","x":-225,"y":0,"move":false},{"type":"point","x":-225,"y":-225,"move":false},{"type":"point","x":-162.5,"y":-137.5,"move":false},{"type":"point","x":-187.5,"y":0,"move":false},{"type":"close"},{"type":"point","x":-200,"y":-237.5,"move":true},{"type":"point","x":-125,"y":-112.5,"move":false},{"type":"point","x":-62.5,"y":-225,"move":false},{"type":"close"},{"type":"point","x":0,"y":-237.5,"move":true},{"type":"point","x":62.5,"y":-137.5,"move":false},{"type":"point","x":175,"y":-75,"move":false},{"type":"point","x":150,"y":-175,"move":false},{"type":"point","x":200,"y":-225,"move":false},{"type":"close"},{"type":"point","x":225,"y":-225,"move":true},{"type":"point","x":175,"y":-175,"move":false},{"type":"point","x":225,"y":25,"move":false},{"type":"close"},{"type":"point","x":187.5,"y":225,"move":true},{"type":"point","x":162.5,"y":100,"move":false},{"type":"point","x":212.5,"y":50,"move":false},{"type":"point","x":225,"y":225,"move":false},{"type":"close"},{"type":"fill","r":175,"g":175,"b":175},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), statChange(rarity) {
            stats.damage *= 1.8 + 0.2*rarity;
        }, onPlayerHit(rarity, enemy) {
            if (random() < 0.1 - 0.01*rarity) {
                let index = -1;
                game.relicsEquipped.forEach((item,i) => { if (item.reference) if (item.reference.name == "Broken Glass") index = i });
                if (index != -1) {
                    game.relicsEquipped[index] = false;
                    effects.push(new Effect(player.x,player.y,"broken glass",75,45));
                }

                updateStats();
            }
        }
/*MF*/},{
        name: "Muzzle Flash",
        desc: "Bullets spawn with damaging flashes",
        drawPath: JSON.parse(
            `[{"type":"point","x":0,"y":-100},{"type":"point","x":0,"y":-50},{"type":"point","x":25,"y":-25},{"type":"point","x":75,"y":-25},{"type":"point","x":75,"y":-75},{"type":"point","x":50,"y":-100},{"type":"close"},{"type":"fill","r":75,"g":75,"b":75},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-250,"y":175},{"type":"point","x":-250,"y":150},{"type":"point","x":0,"y":-100},{"type":"point","x":0,"y":-50},{"type":"point","x":25,"y":-25},{"type":"point","x":75,"y":-25},{"type":"point","x":-175,"y":225},{"type":"point","x":-200,"y":225},{"type":"fill","r":100,"g":100,"b":100},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-12.5,"y":-212.5},{"type":"point","x":25,"y":-62.5},{"type":"point","x":225,"y":12.5},{"type":"point","x":162.5,"y":-50},{"type":"point","x":237.5,"y":-87.5},{"type":"point","x":162.5,"y":-100},{"type":"point","x":237.5,"y":-200},{"type":"point","x":150,"y":-162.5},{"type":"point","x":150,"y":-237.5},{"type":"point","x":100,"y":-175},{"type":"point","x":62.5,"y":-250},{"type":"point","x":37.5,"y":-175},{"type":"close"},{"type":"fill","r":255,"g":255,"b":100},{"type":"stroke","r":50,"g":50,"b":50}]`
        ),flashPath: JSON.parse(
            `[{"type":"point","x":-150,"y":0},{"type":"point","x":-225 ,"y":-225 },{"type":"point","x":0,"y":-150},{"type":"point","x":225 ,"y":-225 },{"type":"point","x":150,"y":0},{"type":"point","x":225 ,"y":225 },{"type":"point","x":0,"y":150},{"type":"point","x":-225 ,"y":225 },{"type":"close"},{"type":"fill","r":255,"g":255,"b":100},{"type":"stroke","r":75,"g":75,"b":50}]`
        ), onSpawn(rarity,bullet) {
            bullets.push(new Bullet({x: bullet.x, y: bullet.y, speed: 20+rarity*5, direction: bullet.direction, size: 50+stats.bulletSize*(1+0.5*rarity), damage: bullet.damage * (0.3 + 0.1*rarity), lifetime: 0.2 + 0.2*rarity, drawPath: this.flashPath, wallPierce: true, pierce: 10,drawAlpha:0.4}));
        }
/*GH*/},{
        name: "Giant's Helmet",
        desc: "Lots more red health, increased player size",
        drawPath: JSON.parse(
            `[{"type":"point","x":-250,"y":200},{"type":"point","x":-175,"y":150},{"type":"point","x":0,"y":100},{"type":"point","x":175,"y":150},{"type":"point","x":250,"y":200},{"type":"point","x":200,"y":-125},{"type":"point","x":-200,"y":-125},{"type":"close"},{"type":"fill","r":25,"g":20,"b":20},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-175,"y":225},{"type":"point","x":-250,"y":200},{"type":"point","x":-250,"y":-175},{"type":"point","x":-175,"y":-225},{"type":"point","x":-50,"y":-250},{"type":"point","x":50,"y":-250},{"type":"point","x":175,"y":-225},{"type":"point","x":250,"y":-175},{"type":"point","x":250,"y":200},{"type":"point","x":175,"y":225},{"type":"point","x":175,"y":-50},{"type":"point","x":100,"y":-75},{"type":"point","x":50,"y":-50},{"type":"point","x":50,"y":112.5},{"type":"point","x":0,"y":125},{"type":"point","x":-50,"y":112.5},{"type":"point","x":-50,"y":-50},{"type":"point","x":-100,"y":-75},{"type":"point","x":-175,"y":-50},{"type":"close"},{"type":"fill","r":75,"g":75,"b":75},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), statChange(rarity) {
            stats.playerSize *= 1.5
            stats.health += 5 + 4*rarity;
            stats.healthMax += 5 + 4*rarity;
        }
/*4L*/},{
        name: "4 Leaf Clover",
        desc: "Chance to gain health when you take damage",
        drawPath: JSON.parse(
            `[{"type":"point","x":0,"y":-100},{"type":"point","x":-25,"y":-175},{"type":"point","x":-100,"y":-225},{"type":"point","x":-175,"y":-225},{"type":"point","x":-225,"y":-175},{"type":"point","x":-225,"y":-100},{"type":"point","x":-175,"y":-25},{"type":"point","x":-100,"y":0},{"type":"point","x":-175,"y":25},{"type":"point","x":-225,"y":100},{"type":"point","x":-225,"y":175},{"type":"point","x":-175,"y":225},{"type":"point","x":-100,"y":225},{"type":"point","x":-25,"y":175},{"type":"point","x":0,"y":100},{"type":"point","x":25,"y":175},{"type":"point","x":100,"y":225},{"type":"point","x":175,"y":225},{"type":"point","x":225,"y":175},{"type":"point","x":225,"y":100},{"type":"point","x":175,"y":25},{"type":"point","x":100,"y":0},{"type":"point","x":175,"y":-25},{"type":"point","x":225,"y":-100},{"type":"point","x":225,"y":-175},{"type":"point","x":175,"y":-225},{"type":"point","x":100,"y":-225},{"type":"point","x":25,"y":-175},{"type":"close"},{"type":"point","x":-25,"y":175,"move":true},{"type":"point","x":0,"y":100,"move":false},{"type":"point","x":25,"y":175,"move":false},{"type":"point","x":25,"y":212.5,"move":false},{"type":"point","x":-12.5,"y":287.5,"move":false},{"type":"point","x":-62.5,"y":287.5,"move":false},{"type":"point","x":-25,"y":200,"move":false},{"type":"close"},{"type":"fill","r":0,"g":100,"b":0},{"type":"stroke","r":0,"g":50,"b":0}]`
        ), onPlayerHit(rarity, enemy) {
            if (random() < 0.1 + 0.05*rarity && stats.extraHealth < stats.extraHealthMax) {
                if (stats.extraHealth) stats.extraHealth++;
                else stats.health++;

                effects.push(new Effect(player.x,player.y,"clover",40,60,Math.PI/4))
            }
        }
/*OD*/},{
        name: "Odometer",
        desc: "Bullets deal more damage the further they travel",
        drawPath: JSON.parse(
            `[{"type":"point","x":-237.5,"y":-75,"move":false},{"type":"point","x":-237.5,"y":75,"move":false},{"type":"point","x":237.5,"y":75,"move":false},{"type":"point","x":237.5,"y":-75,"move":false},{"type":"close"},{"type":"fill","r":30,"g":30,"b":30},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-187.5,"y":-50,"move":false},{"type":"point","x":-212.5,"y":-25,"move":false},{"type":"point","x":-212.5,"y":25,"move":false},{"type":"point","x":-187.5,"y":50,"move":false},{"type":"point","x":-162.5,"y":25,"move":false},{"type":"point","x":-162.5,"y":-25,"move":false},{"type":"close"},{"type":"point","x":-112.5,"y":-50,"move":true},{"type":"point","x":-137.5,"y":-25,"move":false},{"type":"point","x":-137.5,"y":25,"move":false},{"type":"point","x":-112.5,"y":50,"move":false},{"type":"point","x":-87.5,"y":25,"move":false},{"type":"point","x":-87.5,"y":-25,"move":false},{"type":"close"},{"type":"point","x":-37.5,"y":-50,"move":true},{"type":"point","x":-62.5,"y":-25,"move":false},{"type":"point","x":-62.5,"y":25,"move":false},{"type":"point","x":-37.5,"y":50,"move":false},{"type":"point","x":-12.5,"y":25,"move":false},{"type":"point","x":-12.5,"y":-25,"move":false},{"type":"close"},{"type":"point","x":12.5,"y":-25,"move":true},{"type":"point","x":37.5,"y":-50,"move":false},{"type":"point","x":62.5,"y":-25,"move":false},{"type":"point","x":12.5,"y":25,"move":false},{"type":"point","x":37.5,"y":50,"move":false},{"type":"point","x":62.5,"y":25,"move":false},{"type":"point","x":87.5,"y":-25,"move":true},{"type":"point","x":112.5,"y":-50,"move":false},{"type":"point","x":137.5,"y":-25,"move":false},{"type":"point","x":112.5,"y":0,"move":false},{"type":"point","x":137.5,"y":25,"move":false},{"type":"point","x":112.5,"y":50,"move":false},{"type":"point","x":87.5,"y":25,"move":false},{"type":"point","x":212.5,"y":-25,"move":true},{"type":"point","x":187.5,"y":-50,"move":false},{"type":"point","x":162.5,"y":-25,"move":false},{"type":"point","x":162.5,"y":25,"move":false},{"type":"point","x":187.5,"y":50,"move":false},{"type":"point","x":212.5,"y":25,"move":false},{"type":"point","x":187.5,"y":0,"move":false},{"type":"point","x":162.5,"y":25,"move":false},{"type":"stroke","r":150,"g":150,"b":150}]`
        ), damageBoost(rarity, bullet, enemy) {
            return 1 + bullet.distance * (0.00060 + 0.00040 * rarity);
        }
/*CT*/},{
        name: "Crown of Thorns",
        desc: "Shoot out a wave of projectiles when you get hit",
        drawPath: JSON.parse(
            `[{"type":"point","x":0,"y":-100},{"type":"point","x":-150,"y":-75},{"type":"point","x":-200,"y":-50},{"type":"point","x":-225,"y":0},{"type":"point","x":-200,"y":50},{"type":"point","x":-150,"y":75},{"type":"point","x":0,"y":100},{"type":"point","x":150,"y":75},{"type":"point","x":200,"y":50},{"type":"point","x":225,"y":0},{"type":"point","x":200,"y":-50},{"type":"point","x":150,"y":-75},{"type":"close"},{"type":"point","x":50,"y":-125,"move":true},{"type":"point","x":175,"y":-100,"move":false},{"type":"point","x":225,"y":-75,"move":false},{"type":"point","x":250,"y":-25,"move":false},{"type":"point","x":250,"y":25,"move":false},{"type":"point","x":225,"y":75,"move":false},{"type":"point","x":175,"y":100,"move":false},{"type":"point","x":50,"y":125,"move":false},{"type":"point","x":-50,"y":125,"move":false},{"type":"point","x":-175,"y":100,"move":false},{"type":"point","x":-225,"y":75,"move":false},{"type":"point","x":-250,"y":25,"move":false},{"type":"point","x":-250,"y":-25,"move":false},{"type":"point","x":-225,"y":-75,"move":false},{"type":"point","x":-175,"y":-100,"move":false},{"type":"point","x":-50,"y":-125,"move":false},{"type":"close"},{"type":"point","x":-150,"y":-100,"move":true},{"type":"point","x":-150,"y":-150,"move":false},{"type":"point","x":-125,"y":-112.5,"move":false},{"type":"point","x":-200,"y":87.5,"move":true},{"type":"point","x":-212.5,"y":137.5,"move":false},{"type":"point","x":-175,"y":100,"move":false},{"type":"point","x":50,"y":125,"move":true},{"type":"point","x":50,"y":175,"move":false},{"type":"point","x":25,"y":125,"move":false},{"type":"point","x":225,"y":75,"move":true},{"type":"point","x":250,"y":112.5,"move":false},{"type":"point","x":200,"y":87.5,"move":false},{"type":"point","x":175,"y":-100,"move":true},{"type":"point","x":187.5,"y":-150,"move":false},{"type":"point","x":150,"y":-100,"move":false},{"type":"point","x":-25,"y":-100,"move":true},{"type":"point","x":-12.5,"y":-50,"move":false},{"type":"point","x":0,"y":-100,"move":false},{"type":"point","x":200,"y":-50,"move":true},{"type":"point","x":175,"y":-12.5,"move":false},{"type":"point","x":212.5,"y":-25,"move":false},{"type":"point","x":175,"y":62.5,"move":true},{"type":"point","x":150,"y":37.5,"move":false},{"type":"point","x":150,"y":75,"move":false},{"type":"point","x":-125,"y":87.5,"move":true},{"type":"point","x":-100,"y":37.5,"move":false},{"type":"point","x":-100,"y":100,"move":false},{"type":"point","x":-225,"y":-25,"move":true},{"type":"point","x":-175,"y":0,"move":false},{"type":"point","x":-225,"y":0,"move":false},{"type":"fill","r":150,"g":110,"b":80},{"type":"stroke","r":90,"g":75,"b":50}]`
        ), onPlayerHit(rarity, enemy) {
            const bullet = {x:player.x,y:player.y,size:35,speed:15,damage:3+1.5*rarity,direction:Math.random()*Math.PI,triggerExpire:true,pierce:0,offsetTick: 3};
            for (var i = 0; i < 12; i++) {
                bulletBuffer.push(new Bullet(bullet));
                bullet.direction += Math.PI/6;
            }
        }
/*BP*/},{
        name: "Blue Pen",
        desc: "Increased damage the more blue health you have",
        drawPath: JSON.parse(
            `[{"type":"point","x":-200,"y":-175},{"type":"point","x":-125,"y":-100},{"type":"point","x":-100,"y":-125},{"type":"point","x":-175,"y":-200},{"type":"close"},{"type":"point","x":-200,"y":-150,"move":false},{"type":"point","x":-150,"y":-100,"move":true},{"type":"point","x":-200,"y":-150,"move":false},{"type":"point","x":125,"y":150,"move":true},{"type":"point","x":200,"y":200,"move":false},{"type":"point","x":150,"y":125,"move":false},{"type":"close"},{"type":"fill","r":100,"g":100,"b":100},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-125,"y":-100,"move":false},{"type":"point","x":125,"y":150,"move":false},{"type":"point","x":150,"y":125,"move":false},{"type":"point","x":-100,"y":-125,"move":false},{"type":"point","x":-125,"y":-100,"move":false},{"type":"fill","r":50,"g":100,"b":255},{"type":"stroke","r":40,"g":55,"b":75}]`
        ), damageBoost(rarity,bullet,enemy) {
            return 1 + stats.extraHealth*(0.2 + 0.15 * rarity);
        }
/*WC*/},{
        name: "Wind-up Crank",
        desc: "Reduced firerate, massive damage boost",
        drawPath: JSON.parse(
            `[{"type":"point","x":-250,"y":-25},{"type":"point","x":-237.5,"y":-75},{"type":"point","x":-187.5,"y":-87.5},{"type":"point","x":187.5,"y":-87.5},{"type":"point","x":237.5,"y":-75},{"type":"point","x":250,"y":-25},{"type":"point","x":237.5,"y":25},{"type":"point","x":187.5,"y":37.5},{"type":"point","x":-187.5,"y":37.5},{"type":"point","x":-237.5,"y":25},{"type":"close"},{"type":"fill","r":100,"g":100,"b":100},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":237.5,"y":-25},{"type":"point","x":237.5,"y":100},{"type":"point","x":225,"y":137.5},{"type":"point","x":187.5,"y":150},{"type":"point","x":150,"y":137.5},{"type":"point","x":137.5,"y":100},{"type":"point","x":137.5,"y":-25},{"type":"point","x":150,"y":-62.5},{"type":"point","x":187.5,"y":-75},{"type":"point","x":225,"y":-62.5},{"type":"close"},{"type":"fill","r":30,"g":30,"b":30},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), statChange(rarity) {
            stats.fireRate *= 1.75;
            stats.damage *= 2 + 0.25*rarity;
        }
/*TM*/},{
        name: "Toxic Mushrooms",
        desc: "Deal damage to nearby enemies",
        drawPath: JSON.parse(
            `[{"type":"point","x":-175,"y":200},{"type":"point","x":-50,"y":175},{"type":"point","x":-100,"y":-75,"move":false},{"type":"point","x":-225,"y":-50,"move":false},{"type":"close"},{"type":"point","x":-50,"y":175,"move":true},{"type":"point","x":-75,"y":50,"move":false},{"type":"point","x":-75,"y":-100,"move":false},{"type":"point","x":50,"y":-100,"move":false},{"type":"point","x":50,"y":175,"move":false},{"type":"close"},{"type":"point","x":50,"y":175,"move":true},{"type":"point","x":50,"y":50,"move":false},{"type":"point","x":75,"y":-75,"move":false},{"type":"point","x":200,"y":-50,"move":false},{"type":"point","x":150,"y":200,"move":false},{"type":"close"},{"type":"fill","r":150,"g":155,"b":120},{"type":"stroke","r":50,"g":50,"b":30},{"type":"point","x":-212.5,"y":0,"move":false},{"type":"point","x":-237.5,"y":25,"move":false},{"type":"point","x":-275,"y":12.5,"move":false},{"type":"point","x":-287.5,"y":-37.5,"move":false},{"type":"point","x":-287.5,"y":-87.5,"move":false},{"type":"point","x":-262.5,"y":-137.5,"move":false},{"type":"point","x":-187.5,"y":-175,"move":false},{"type":"point","x":-112.5,"y":-175,"move":false},{"type":"point","x":-62.5,"y":-225,"move":false},{"type":"point","x":37.5,"y":-225,"move":false},{"type":"point","x":87.5,"y":-187.5,"move":false},{"type":"point","x":150,"y":-212.5,"move":false},{"type":"point","x":250,"y":-175,"move":false},{"type":"point","x":275,"y":-87.5,"move":false},{"type":"point","x":262.5,"y":-25,"move":false},{"type":"point","x":212.5,"y":0,"move":false},{"type":"point","x":187.5,"y":0,"move":false},{"type":"point","x":162.5,"y":-37.5,"move":false},{"type":"point","x":100,"y":-50,"move":false},{"type":"point","x":62.5,"y":-25,"move":false},{"type":"point","x":37.5,"y":-25,"move":false},{"type":"point","x":12.5,"y":-75,"move":false},{"type":"point","x":-50,"y":-75,"move":false},{"type":"point","x":-87.5,"y":-25,"move":false},{"type":"point","x":-137.5,"y":-25,"move":false},{"type":"close"},{"type":"fill","r":0,"g":65,"b":0},{"type":"point","x":-112.5,"y":-175,"move":true},{"type":"point","x":-112.5,"y":-125,"move":false},{"type":"point","x":87.5,"y":-187.5,"move":true},{"type":"point","x":87.5,"y":-137.5,"move":false},{"type":"point","x":-75,"y":-50,"move":true},{"type":"stroke","r":0,"g":25,"b":0}]`
        ),cloudPath: JSON.parse(
            `[{"type":"point","x":0,"y":-250},{"type":"point","x":-187.5,"y":-187.5},{"type":"point","x":-250,"y":0},{"type":"point","x":-187.5,"y":187.5},{"type":"point","x":0,"y":250},{"type":"point","x":187.5,"y":187.5},{"type":"point","x":250,"y":0},{"type":"point","x":187.5,"y":-187.5},{"type":"close"},{"type":"fill","r":0,"g":255,"b":0},{"type":"stroke","r":0,"g":50,"b":0}]`
        ), playerTick(rarity) {
            if (!(game.tick%10)) bulletBuffer.push(new Bullet({x:player.x,y:player.y,speed:0,size:125+rarity*25,damage:0.4+0.2*rarity,drawPath:this.cloudPath,drawAlpha:0.1,lifetime:0.5,wallPierce:true}))
        }
/*SB*/},{
        name: "Smoke Bomb",
        desc: "Deal damage to nearby enemies while you are invincible (dashing)",
        drawPath: JSON.parse(
            `[{"type":"point","x":-200,"y":200},{"type":"point","x":-225,"y":150},{"type":"point","x":-225,"y":100},{"type":"point","x":75,"y":-200},{"type":"point","x":125,"y":-200},{"type":"point","x":175,"y":-175},{"type":"point","x":200,"y":-125},{"type":"point","x":200,"y":-75},{"type":"point","x":-100,"y":225},{"type":"point","x":-150,"y":225},{"type":"close"},{"type":"fill","r":25,"g":25,"b":25},{"type":"point","x":75,"y":-200,"move":true},{"type":"point","x":75,"y":-150,"move":false},{"type":"point","x":100,"y":-100,"move":false},{"type":"point","x":150,"y":-75,"move":false},{"type":"point","x":200,"y":-75,"move":false},{"type":"fill","r":25,"g":25,"b":25},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-75,"y":200,"move":false},{"type":"point","x":175,"y":-50,"move":false},{"type":"point","x":187.5,"y":0,"move":false},{"type":"point","x":187.5,"y":75,"move":false},{"type":"point","x":150,"y":112.5,"move":false},{"type":"point","x":100,"y":125,"move":false},{"type":"point","x":125,"y":125,"move":false},{"type":"point","x":112.5,"y":187.5,"move":false},{"type":"point","x":75,"y":225,"move":false},{"type":"point","x":0,"y":237.5,"move":false},{"type":"point","x":-62.5,"y":212.5,"move":false},{"type":"close"},{"type":"point","x":-200,"y":75,"move":true},{"type":"point","x":25,"y":-150,"move":false},{"type":"point","x":12.5,"y":-175,"move":false},{"type":"point","x":-100,"y":-175,"move":false},{"type":"point","x":-150,"y":-125,"move":false},{"type":"point","x":-150,"y":-100,"move":false},{"type":"point","x":-187.5,"y":-125,"move":false},{"type":"point","x":-225,"y":-100,"move":false},{"type":"point","x":-250,"y":-37.5,"move":false},{"type":"point","x":-237.5,"y":37.5,"move":false},{"type":"close"},{"type":"fill","r":75,"g":75,"b":75},{"type":"stroke","r":50,"g":50,"b":50}]`
        ),cloudPath: JSON.parse(
            `[{"type":"point","x":0,"y":-250},{"type":"point","x":-187.5,"y":-187.5},{"type":"point","x":-250,"y":0},{"type":"point","x":-187.5,"y":187.5},{"type":"point","x":0,"y":250},{"type":"point","x":187.5,"y":187.5},{"type":"point","x":250,"y":0},{"type":"point","x":187.5,"y":-187.5},{"type":"close"},{"type":"fill","r":75,"g":75,"b":75},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), playerTick(rarity) {
            if (player.iFrames) bulletBuffer.push(new Bullet({x:player.x,y:player.y,speed:0,size:100+rarity*25,damage:0.4+0.25*rarity,drawPath:this.cloudPath,drawAlpha:0.1,lifetime:0.5,wallPierce:true}))
        }
/*BH*/},{
        name: "Beating Heart",
        desc: "Bullets deal more damage the longer they exist",
        drawPath: JSON.parse(
            `[{"type":"point","x":-25,"y":125},{"type":"point","x":25,"y":50},{"type":"point","x":50,"y":-50},{"type":"point","x":75,"y":-75},{"type":"point","x":125,"y":-75},{"type":"point","x":125,"y":-50},{"type":"point","x":100,"y":-50},{"type":"point","x":125,"y":-25},{"type":"point","x":150,"y":50},{"type":"point","x":150,"y":125},{"type":"point","x":125,"y":175},{"type":"point","x":75,"y":175},{"type":"point","x":0,"y":150},{"type":"close"},{"type":"fill","r":150,"g":100,"b":125},{"type":"stroke","r":100,"g":50,"b":75},{"type":"point","x":25,"y":50},{"type":"point","x":0,"y":25},{"type":"point","x":-50,"y":25},{"type":"point","x":-62.5,"y":75},{"type":"point","x":-25,"y":125},{"type":"close"},{"type":"fill","r":150,"g":100,"b":150},{"type":"stroke","r":100,"g":50,"b":100},{"type":"point","x":-12.5,"y":25},{"type":"point","x":0,"y":25},{"type":"point","x":25,"y":50},{"type":"point","x":50,"y":-50},{"type":"point","x":75,"y":-75},{"type":"point","x":112.5,"y":-75},{"type":"point","x":100,"y":-100},{"type":"point","x":62.5,"y":-100},{"type":"point","x":62.5,"y":-150},{"type":"point","x":50,"y":-150},{"type":"point","x":50,"y":-100},{"type":"point","x":12.5,"y":-75},{"type":"point","x":0,"y":-125},{"type":"point","x":-12.5,"y":-125},{"type":"point","x":0,"y":-62.5},{"type":"close"},{"type":"fill","r":175,"g":50,"b":50},{"type":"stroke","r":100,"g":50,"b":50},{"type":"point","x":-12.5,"y":25},{"type":"point","x":0,"y":-75},{"type":"point","x":37.5,"y":-112.5},{"type":"point","x":100,"y":-112.5},{"type":"point","x":100,"y":-125},{"type":"point","x":37.5,"y":-125},{"type":"point","x":-12.5,"y":-87.5},{"type":"point","x":-12.5,"y":-162.5},{"type":"point","x":-25,"y":-162.5},{"type":"point","x":-25,"y":-100},{"type":"point","x":-62.5,"y":-137.5},{"type":"point","x":-112.5,"y":-137.5},{"type":"point","x":-112.5,"y":-125},{"type":"point","x":-75,"y":-125},{"type":"point","x":-37.5,"y":-75},{"type":"point","x":-50,"y":25},{"type":"close"},{"type":"point","x":-62.5,"y":75,"move":true},{"type":"point","x":-25,"y":125,"move":false},{"type":"point","x":-62.5,"y":125,"move":false},{"type":"point","x":-75,"y":112.5,"move":false},{"type":"close"},{"type":"fill","r":75,"g":90,"b":150},{"type":"stroke","r":50,"g":50,"b":100}]`
        ), damageBoost(rarity,bullet) {
            return 1 + bullet.tick * (0.005 + 0.002 * rarity);
        }
    }
]

relics.forEach((item) => {
    item.type = "relic"
    Object.keys(item).forEach((item2) => {
        if (typeof item[item2] == "function") item[item2] = item[item2].bind(item);
    })
});

const artifacts = [
/*BB*/{
        name: "Big Bomb",
        desc: "Bullets explode on expiration",
        drawPath: JSON.parse(
            `[{"type":"point","x":0,"y":-175},{"type":"point","x":-125,"y":-125},{"type":"point","x":-175,"y":0},{"type":"point","x":-125,"y":125},{"type":"point","x":0,"y":175},{"type":"point","x":125,"y":125},{"type":"point","x":175,"y":0},{"type":"point","x":125,"y":-125},{"type":"close"},{"type":"fill","r":25,"g":25,"b":25},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-12.5,"y":-175},{"type":"point","x":0,"y":-225},{"type":"point","x":25,"y":-250},{"type":"point","x":75,"y":-262.5},{"type":"point","x":87.5,"y":-237.5},{"type":"point","x":37.5,"y":-212.5},{"type":"point","x":25,"y":-162.5},{"type":"point","x":0,"y":-175},{"type":"close"},{"type":"fill","r":75,"g":55,"b":25},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":62.5,"y":-250},{"type":"point","x":75,"y":-287.5},{"type":"point","x":87.5,"y":-250},{"type":"point","x":125,"y":-237.5},{"type":"point","x":87.5,"y":-225},{"type":"point","x":75,"y":-187.5},{"type":"point","x":62.5,"y":-225},{"type":"point","x":25,"y":-237.5},{"type":"close"},{"type":"fill","r":200,"g":200,"b":0},{"type":"stroke","r":100,"g":100,"b":0}]`
        ), bombPath: JSON.parse(
            `[{"type":"point","x":100,"y":-250},{"type":"point","x":250,"y":-100},{"type":"point","x":250,"y":100},{"type":"point","x":100,"y":250},{"type":"point","x":-100,"y":250},{"type":"point","x":-250,"y":100},{"type":"point","x":-250,"y":-100},{"type":"point","x":-100,"y":-250},{"type":"close"},{"type":"fill","r":255,"g":0,"b":0},{"type":"stroke","r":255,"g":75,"b":25},{"type":"point","x":0,"y":-175},{"type":"point","x":125,"y":-125},{"type":"point","x":175,"y":0},{"type":"point","x":125,"y":125},{"type":"point","x":0,"y":175},{"type":"point","x":-125,"y":125},{"type":"point","x":-175,"y":0},{"type":"point","x":-125,"y":-125},{"type":"close"},{"type":"fill","r":255,"g":150,"b":0},{"type":"stroke","r":125,"g":0,"b":0}]`
        ), expiration(_, bullet) {
            bulletBuffer.push(new Bullet({x: bullet.x, y: bullet.y, speed: 0, size: bullet.size*4 + 85, damage: bullet.damage**1.1*0.7 + 0.15, drawPath: artifacts[0].bombPath, lifetime: 0.3, wallPierce: true, pierce: 10,direction:Math.random()*Math.PI,drawAlpha:0.7}))
        }
/*IB*/},{
        name: "Ink Brush",
        desc: "Bullets temporarily mark the stage",
        drawPath: JSON.parse(
            `[{"type":"point","x":12.5,"y":-250},{"type":"point","x":25,"y":-125},{"type":"point","x":12.5,"y":-50},{"type":"point","x":-25,"y":12.5},{"type":"point","x":50,"y":-12.5},{"type":"point","x":137.5,"y":-75},{"type":"point","x":250,"y":-250},{"type":"close"},{"type":"fill","r":165,"g":155,"b":145},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":12.5,"y":-50},{"type":"point","x":37.5,"y":-37.5},{"type":"point","x":100,"y":-50},{"type":"point","x":50,"y":-12.5},{"type":"point","x":-25,"y":12.5},{"type":"close"},{"type":"point","x":-12.5,"y":-12.5,"move":true},{"type":"point","x":-25,"y":12.5,"move":false},{"type":"point","x":25,"y":0,"move":false},{"type":"point","x":-100,"y":112.5,"move":false},{"type":"point","x":-187.5,"y":137.5,"move":false},{"type":"point","x":-262.5,"y":112.5,"move":false},{"type":"point","x":-275,"y":87.5,"move":false},{"type":"point","x":-287.5,"y":-37.5,"move":false},{"type":"point","x":-262.5,"y":-175,"move":false},{"type":"point","x":-225,"y":-237.5,"move":false},{"type":"point","x":-200,"y":-250,"move":false},{"type":"point","x":-175,"y":-237.5,"move":false},{"type":"point","x":-175,"y":-212.5,"move":false},{"type":"point","x":-200,"y":-175,"move":false},{"type":"point","x":-237.5,"y":-50,"move":false},{"type":"point","x":-225,"y":75,"move":false},{"type":"point","x":-187.5,"y":87.5,"move":false},{"type":"point","x":-112.5,"y":62.5,"move":false},{"type":"close"},{"type":"fill","r":25,"g":25,"b":25},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), inkPath: JSON.parse(
            `[{"type":"point","x":0,"y":-250},{"type":"point","x":125,"y":-225},{"type":"point","x":225,"y":-125},{"type":"point","x":250,"y":0},{"type":"point","x":225,"y":125},{"type":"point","x":125,"y":225},{"type":"point","x":0,"y":250},{"type":"point","x":-125,"y":225},{"type":"point","x":-225,"y":125},{"type":"point","x":-250,"y":0},{"type":"point","x":-225,"y":-125},{"type":"point","x":-125,"y":-225},{"type":"close"},{"type":"fill","r":10,"g":10,"b":10},{"type":"stroke","r":35,"g":35,"b":35}]`
        ), bulletTick(_, bullet) {
            if (Math.random() < 0.3) bulletBuffer.push(new Bullet({x: bullet.x, y: bullet.y, speed: 0, size: Math.max(bullet.targetSize,bullet.size)*0.6 + 15, damage: bullet.damage**1.1*0.4 + 0.15, drawPath: this.inkPath, lifetime: 0.75, wallPierce: true,direction:Math.random()*Math.PI,drawAlpha:0.7}))
        }
/*BS*/},{
        name: "Barcode Scanner",
        desc: "Bullets travel almost instantly, +10 pierce",
        drawPath: JSON.parse(
            `[{"type":"point","x":-150,"y":87.5},{"type":"point","x":-100,"y":250},{"type":"point","x":-50,"y":250},{"type":"point","x":-100,"y":75},{"type":"point","x":12.5,"y":12.5},{"type":"point","x":12.5,"y":-12.5},{"type":"point","x":-25,"y":-50},{"type":"point","x":-100,"y":-75},{"type":"point","x":-212.5,"y":-12.5},{"type":"point","x":-225,"y":37.5},{"type":"point","x":-200,"y":75},{"type":"point","x":-150,"y":87.5},{"type":"point","x":-100,"y":75},{"type":"fill","r":100,"g":100,"b":100},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-75,"y":-87.5},{"type":"point","x":-62.5,"y":-150},{"type":"point","x":25,"y":-150},{"type":"point","x":162.5,"y":-112.5},{"type":"point","x":212.5,"y":-37.5},{"type":"point","x":187.5,"y":12.5},{"type":"point","x":37.5,"y":12.5},{"type":"point","x":37.5,"y":-12.5},{"type":"point","x":0,"y":-62.5},{"type":"close"},{"type":"fill","r":150,"g":150,"b":75},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), statChange(_) {
            stats.previousBulletSpeed = stats.bulletSpeed;
            stats.bulletSpeed += 300;
            if (!stats.trailColor) stats.trailColor = "#cc0";
            stats.trailLength = 10;
            if (stats.pierce) stats.pierce += 10;
            else stats.pierce = 10;
            stats.noDrawBullets = true;
        }
/*GR*/},{
        name: "Ghost Reactor",
        desc: "Bullets pierce everything, gaining damage and size when they do",
        drawPath: JSON.parse(
            `[{"type":"point","x":-250,"y":150},{"type":"point","x":-225,"y":225},{"type":"point","x":-150,"y":250},{"type":"point","x":-75,"y":250},{"type":"point","x":250,"y":-75},{"type":"point","x":250,"y":-150},{"type":"point","x":225,"y":-225},{"type":"point","x":150,"y":-250},{"type":"point","x":75,"y":-250},{"type":"point","x":-250,"y":75},{"type":"close"},{"type":"fill","r":75,"g":75,"b":75},{"type":"point","x":75,"y":-250,"move":true},{"type":"point","x":75,"y":-175,"move":false},{"type":"point","x":100,"y":-100,"move":false},{"type":"point","x":175,"y":-75,"move":false},{"type":"point","x":250,"y":-75,"move":false},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-200,"y":125,"move":false},{"type":"point","x":-200,"y":175,"move":false},{"type":"point","x":-175,"y":200,"move":false},{"type":"point","x":-125,"y":200,"move":false},{"type":"point","x":125,"y":-50,"move":false},{"type":"point","x":75,"y":-50,"move":false},{"type":"point","x":50,"y":-75,"move":false},{"type":"point","x":50,"y":-125,"move":false},{"type":"close"},{"type":"point","x":175,"y":-200,"move":true},{"type":"point","x":125,"y":-200,"move":false},{"type":"point","x":125,"y":-150,"move":false},{"type":"point","x":150,"y":-125,"move":false},{"type":"point","x":200,"y":-125,"move":false},{"type":"point","x":200,"y":-175,"move":false},{"type":"close"},{"type":"fill","r":0,"g":125,"b":100},{"type":"stroke","r":0,"g":50,"b":50}]`
        ), statChange(_) {
            stats.wallPierce = true;
            if (stats.pierce) stats.pierce += 20;
            else stats.pierce = 20;
        }, onHit(_,bullet,enemy) {
            bullet.damage *= 1.75;
            bullet.size *= 1.75;
        }
/*BV*/},{
        name: "Broken Vase",
        desc: "Bullets explode into shrapnal",
        drawPath: JSON.parse(
            `[{"type":"point","x":-75,"y":-225},{"type":"point","x":0,"y":-212.5},{"type":"point","x":75,"y":-225},{"type":"point","x":0,"y":-237.5},{"type":"point","x":-75,"y":-225},{"type":"point","x":-62.5,"y":-150},{"type":"point","x":-87.5,"y":-100},{"type":"point","x":-150,"y":-50},{"type":"point","x":-175,"y":0},{"type":"point","x":-175,"y":75},{"type":"point","x":-150,"y":150},{"type":"point","x":-100,"y":200},{"type":"point","x":-25,"y":225},{"type":"point","x":12.5,"y":225},{"type":"point","x":100,"y":200},{"type":"point","x":150,"y":150},{"type":"point","x":175,"y":75},{"type":"point","x":175,"y":0},{"type":"point","x":150,"y":-50},{"type":"point","x":87.5,"y":-100},{"type":"point","x":50,"y":-150},{"type":"point","x":75,"y":-225},{"type":"fill","r":100,"g":60,"b":0},{"type":"point","x":-87.5,"y":-100,"move":true},{"type":"point","x":0,"y":-62.5,"move":false},{"type":"point","x":12.5,"y":25,"move":false},{"type":"point","x":0,"y":-25,"move":true},{"type":"point","x":50,"y":-25,"move":false},{"type":"point","x":-150,"y":150,"move":true},{"type":"point","x":-100,"y":37.5,"move":false},{"type":"point","x":-25,"y":75,"move":false},{"type":"point","x":-100,"y":37.5,"move":true},{"type":"point","x":-100,"y":-25,"move":false},{"type":"point","x":-37.5,"y":225,"move":true},{"type":"point","x":-12.5,"y":112.5,"move":false},{"type":"point","x":-37.5,"y":50,"move":false},{"type":"point","x":-12.5,"y":125,"move":true},{"type":"point","x":87.5,"y":100,"move":false},{"type":"point","x":175,"y":0,"move":true},{"type":"point","x":87.5,"y":25,"move":false},{"type":"point","x":50,"y":75,"move":false},{"type":"point","x":62.5,"y":50,"move":true},{"type":"point","x":37.5,"y":12.5,"move":false},{"type":"stroke","r":50,"g":35,"b":25}]`
        ), expiration(_,bullet,enemy) {
            const bullet2 = {x:bullet.x,y:bullet.y,size:bullet.size*0.6,damage:bullet.damage*0.2,direction:Math.random()*Math.PI,};
            for (var i = 0; i < 8; i++) {
                bulletBuffer.push(new Bullet(bullet2));
                bullet2.direction += Math.PI/4;
            }   
        }
/*LD*/},{
        name: "Loaded Dice",
        desc: "Luck is on your side",
        drawPath: JSON.parse(
            `[{"type":"point","x":-125,"y":125},{"type":"point","x":-225,"y":75},{"type":"point","x":-225,"y":-50},{"type":"point","x":-125,"y":-100},{"type":"point","x":-25,"y":-50},{"type":"point","x":-25,"y":75},{"type":"close"},{"type":"point","x":125,"y":25,"move":true},{"type":"point","x":25,"y":-25,"move":false},{"type":"point","x":25,"y":-150,"move":false},{"type":"point","x":125,"y":-200,"move":false},{"type":"point","x":225,"y":-150,"move":false},{"type":"point","x":225,"y":-25,"move":false},{"type":"close"},{"type":"point","x":-125,"y":125,"move":true},{"type":"point","x":-125,"y":0,"move":false},{"type":"point","x":-25,"y":-50,"move":false},{"type":"point","x":-125,"y":0,"move":true},{"type":"point","x":-225,"y":-50,"move":false},{"type":"point","x":125,"y":25,"move":true},{"type":"point","x":125,"y":-100,"move":false},{"type":"point","x":225,"y":-150,"move":false},{"type":"point","x":125,"y":-100,"move":true},{"type":"point","x":25,"y":-150,"move":false},{"type":"fill","r":175,"g":175,"b":175},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-137.5,"y":-25,"move":false},{"type":"point","x":-112.5,"y":-25,"move":false},{"type":"point","x":-162.5,"y":-37.5,"move":true},{"type":"point","x":-137.5,"y":-37.5,"move":false},{"type":"point","x":-187.5,"y":-50,"move":true},{"type":"point","x":-162.5,"y":-50,"move":false},{"type":"point","x":-137.5,"y":-75,"move":true},{"type":"point","x":-112.5,"y":-75,"move":false},{"type":"point","x":-112.5,"y":-62.5,"move":true},{"type":"point","x":-87.5,"y":-62.5,"move":false},{"type":"point","x":-87.5,"y":-50,"move":true},{"type":"point","x":-62.5,"y":-50,"move":false},{"type":"point","x":112.5,"y":-175,"move":true},{"type":"point","x":137.5,"y":-175,"move":false},{"type":"point","x":137.5,"y":-162.5,"move":true},{"type":"point","x":162.5,"y":-162.5,"move":false},{"type":"point","x":162.5,"y":-150,"move":true},{"type":"point","x":187.5,"y":-150,"move":false},{"type":"point","x":62.5,"y":-150,"move":true},{"type":"point","x":87.5,"y":-150,"move":false},{"type":"point","x":87.5,"y":-137.5,"move":true},{"type":"point","x":112.5,"y":-137.5,"move":false},{"type":"point","x":112.5,"y":-125,"move":true},{"type":"point","x":137.5,"y":-125,"move":false},{"type":"point","x":-112.5,"y":25,"move":true},{"type":"point","x":-87.5,"y":0,"move":false},{"type":"point","x":-62.5,"y":0,"move":true},{"type":"point","x":-37.5,"y":-25,"move":false},{"type":"point","x":-112.5,"y":100,"move":true},{"type":"point","x":-87.5,"y":75,"move":false},{"type":"point","x":-62.5,"y":75,"move":true},{"type":"point","x":-37.5,"y":50,"move":false},{"type":"point","x":-200,"y":-12.5,"move":true},{"type":"point","x":-200,"y":12.5,"move":false},{"type":"point","x":-150,"y":62.5,"move":true},{"type":"point","x":-150,"y":87.5,"move":false},{"type":"point","x":50,"y":-112.5,"move":true},{"type":"point","x":50,"y":-87.5,"move":false},{"type":"point","x":75,"y":-75,"move":true},{"type":"point","x":75,"y":-50,"move":false},{"type":"point","x":100,"y":-37.5,"move":true},{"type":"point","x":100,"y":-12.5,"move":false},{"type":"point","x":137.5,"y":-75,"move":true},{"type":"point","x":162.5,"y":-100,"move":false},{"type":"point","x":187.5,"y":-100,"move":true},{"type":"point","x":212.5,"y":-125,"move":false},{"type":"point","x":137.5,"y":0,"move":true},{"type":"point","x":162.5,"y":-25,"move":false},{"type":"point","x":187.5,"y":-25,"move":true},{"type":"point","x":212.5,"y":-50,"move":false},{"type":"point","x":162.5,"y":-50,"move":true},{"type":"point","x":187.5,"y":-75,"move":false},{"type":"stroke","r":50,"g":50,"b":50},{"type":"close"}]`
        ), statChange(_) {
            stats.luck += 2;
        }
/*BM*/},{
        name: "Broken Mirror",
        desc: "Luck is against you, massive damage boost",
        drawPath: JSON.parse(
            `[{"type":"point","x":0,"y":250},{"type":"point","x":-75,"y":225},{"type":"point","x":-125,"y":150},{"type":"point","x":-150,"y":50},{"type":"point","x":-150,"y":-50},{"type":"point","x":-125,"y":-150},{"type":"point","x":-75,"y":-225},{"type":"point","x":0,"y":-250},{"type":"point","x":75,"y":-225},{"type":"point","x":125,"y":-150},{"type":"point","x":150,"y":-50},{"type":"point","x":150,"y":50},{"type":"point","x":125,"y":150},{"type":"point","x":75,"y":225},{"type":"close"},{"type":"fill","r":100,"g":100,"b":100},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":0,"y":212.5},{"type":"point","x":62.5,"y":187.5},{"type":"point","x":100,"y":125},{"type":"point","x":125,"y":50},{"type":"point","x":125,"y":-50},{"type":"point","x":100,"y":-125},{"type":"point","x":62.5,"y":-187.5},{"type":"point","x":0,"y":-212.5},{"type":"point","x":-62.5,"y":-187.5},{"type":"point","x":-100,"y":-125},{"type":"point","x":-125,"y":-50},{"type":"point","x":-125,"y":50},{"type":"point","x":-100,"y":125},{"type":"point","x":-62.5,"y":187.5},{"type":"close"},{"type":"fill","r":55,"g":125,"b":150},{"type":"point","x":37.5,"y":125},{"type":"point","x":-12.5,"y":25},{"type":"point","x":12.5,"y":75,"move":true},{"type":"point","x":62.5,"y":37.5,"move":false},{"type":"point","x":-62.5,"y":-187.5,"move":true},{"type":"point","x":-37.5,"y":-125,"move":false},{"type":"point","x":-62.5,"y":0,"move":false},{"type":"point","x":-50,"y":-50,"move":true},{"type":"point","x":0,"y":-12.5,"move":false},{"type":"point","x":-100,"y":125,"move":true},{"type":"point","x":-62.5,"y":37.5,"move":false},{"type":"point","x":-87.5,"y":87.5,"move":true},{"type":"point","x":-50,"y":112.5,"move":false},{"type":"point","x":12.5,"y":175,"move":true},{"type":"point","x":-12.5,"y":112.5,"move":false},{"type":"point","x":125,"y":50,"move":true},{"type":"point","x":37.5,"y":-50,"move":false},{"type":"point","x":25,"y":-137.5,"move":false},{"type":"point","x":62.5,"y":-12.5,"move":true},{"type":"point","x":25,"y":12.5,"move":false},{"type":"point","x":62.5,"y":-187.5,"move":true},{"type":"point","x":0,"y":-150,"move":false},{"type":"point","x":25,"y":-100,"move":true},{"type":"point","x":75,"y":-100,"move":false},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), statChange(_) {
            stats.luck -= 2;
            stats.damage *= 2.5;
        }
/*PB*/},{
        name: "Plasma Ball",
        desc: "Bullets constantly damage nearby enemies",
        drawPath: JSON.parse(
            `[{"type":"point","x":0,"y":250},{"type":"point","x":-125,"y":225},{"type":"point","x":-225,"y":125},{"type":"point","x":-250,"y":0},{"type":"point","x":-225,"y":-125},{"type":"point","x":-125,"y":-225},{"type":"point","x":0,"y":-250},{"type":"point","x":125,"y":-225},{"type":"point","x":225,"y":-125},{"type":"point","x":250,"y":0},{"type":"point","x":225,"y":125},{"type":"point","x":125,"y":225},{"type":"close"},{"type":"fill","r":10,"g":10,"b":35},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":0,"y":0},{"type":"point","x":75,"y":-150},{"type":"point","x":62.5,"y":-200},{"type":"point","x":0,"y":0,"move":true},{"type":"point","x":-137.5,"y":-37.5,"move":false},{"type":"point","x":-200,"y":50,"move":false},{"type":"point","x":0,"y":0,"move":true},{"type":"point","x":87.5,"y":-25,"move":false},{"type":"point","x":175,"y":37.5,"move":false},{"type":"point","x":137.5,"y":12.5,"move":true},{"type":"point","x":187.5,"y":-25,"move":false},{"type":"point","x":50,"y":-100,"move":true},{"type":"point","x":137.5,"y":-100,"move":false},{"type":"point","x":0,"y":0,"move":true},{"type":"point","x":25,"y":87.5,"move":false},{"type":"point","x":-50,"y":162.5,"move":false},{"type":"point","x":-12.5,"y":125,"move":true},{"type":"point","x":25,"y":162.5,"move":false},{"type":"point","x":-87.5,"y":-25,"move":true},{"type":"point","x":-112.5,"y":-125,"move":false},{"type":"stroke","r":5,"g":100,"b":100},{"type":"point","x":0,"y":0,"move":true},{"type":"point","x":-12.5,"y":-62.5,"move":false},{"type":"point","x":-87.5,"y":-162.5,"move":false},{"type":"point","x":-50,"y":-112.5,"move":true},{"type":"point","x":-25,"y":-175,"move":false},{"type":"point","x":0,"y":0,"move":true},{"type":"point","x":-87.5,"y":37.5,"move":false},{"type":"point","x":-87.5,"y":125,"move":false},{"type":"point","x":-150,"y":150,"move":false},{"type":"point","x":-112.5,"y":137.5,"move":true},{"type":"point","x":-87.5,"y":187.5,"move":false},{"type":"point","x":0,"y":0,"move":true},{"type":"point","x":62.5,"y":25,"move":false},{"type":"point","x":125,"y":112.5,"move":false},{"type":"point","x":100,"y":75,"move":true},{"type":"point","x":187.5,"y":62.5,"move":false},{"type":"point","x":0,"y":0,"move":true},{"type":"point","x":100,"y":-87.5,"move":false},{"type":"point","x":200,"y":-62.5,"move":false},{"type":"point","x":150,"y":-75,"move":true},{"type":"point","x":187.5,"y":-100,"move":false},{"type":"stroke","r":0,"g":200,"b":200}]`
        ),electricityPath: JSON.parse(
            `[{"type":"point","x":0,"y":-250},{"type":"point","x":-187.5,"y":-187.5},{"type":"point","x":-250,"y":0},{"type":"point","x":-187.5,"y":187.5},{"type":"point","x":0,"y":250},{"type":"point","x":187.5,"y":187.5},{"type":"point","x":250,"y":0},{"type":"point","x":187.5,"y":-187.5},{"type":"close"},{"type":"fill","r":25,"g":150,"b":150},{"type":"stroke","r":0,"g":50,"b":50}]`
        ), bulletTick(_, bullet) {
            if (Math.random() < 0.3) bulletBuffer.push(new Bullet({x: bullet.x, y: bullet.y, vx: bullet.vx, vy: bullet.vy, size: Math.max(bullet.targetSize,bullet.size)*1.7 + 150, damage: bullet.damage*0.35, drawPath: this.electricityPath, lifetime: 0.05, wallPierce: true, pierce: 10,direction:Math.random()*Math.PI,drawAlpha:0.1}))
        }
/*BB*/},{
        name: "Bouncy Ball",
        desc: "Bullets bounce & gain damage when they do",
        drawPath: JSON.parse(
            `[{"type":"point","x":0,"y":-250},{"type":"point","x":125,"y":-225},{"type":"point","x":225,"y":-125},{"type":"point","x":250,"y":0},{"type":"point","x":225,"y":125},{"type":"point","x":125,"y":225},{"type":"point","x":0,"y":250},{"type":"point","x":-125,"y":225},{"type":"point","x":-225,"y":125},{"type":"point","x":-250,"y":0},{"type":"point","x":-225,"y":-125},{"type":"point","x":-125,"y":-225},{"type":"close"},{"type":"fill","r":125,"g":60,"b":105},{"type":"stroke","r":55,"g":15,"b":35},{"type":"point","x":150,"y":-150},{"type":"point","x":200,"y":-50},{"type":"point","x":150,"y":50},{"type":"point","x":50,"y":100},{"type":"point","x":-50,"y":50},{"type":"point","x":-100,"y":-50},{"type":"point","x":-50,"y":-150},{"type":"point","x":50,"y":-200},{"type":"close"},{"type":"fill","r":155,"g":75,"b":115},{"type":"stroke","r":140,"g":60,"b":110},{"type":"point","x":125,"y":-125,"move":false},{"type":"point","x":150,"y":-75,"move":false},{"type":"point","x":125,"y":-25,"move":false},{"type":"point","x":75,"y":0,"move":false},{"type":"point","x":25,"y":-25,"move":false},{"type":"point","x":0,"y":-75,"move":false},{"type":"point","x":25,"y":-125,"move":false},{"type":"point","x":75,"y":-150,"move":false},{"type":"close"},{"type":"fill","r":250,"g":135,"b":200},{"type":"stroke","r":230,"g":120,"b":180}]`
        ), statChange(_) {
            stats.bulletBounce = 4;
        }
/*HM*/},{
        name: "Hit Marker",
        desc: "Deal more damage to enemies the more times they are hit",
        drawPath: JSON.parse(
            `[{"type":"point","x":-250,"y":-200},{"type":"point","x":-200,"y":-250},{"type":"point","x":-25,"y":-75},{"type":"point","x":-75,"y":-25},{"type":"close"},{"type":"point","x":200,"y":-250,"move":true},{"type":"point","x":25,"y":-75,"move":false},{"type":"point","x":75,"y":-25,"move":false},{"type":"point","x":250,"y":-200,"move":false},{"type":"close"},{"type":"point","x":250,"y":200,"move":true},{"type":"point","x":200,"y":250,"move":false},{"type":"point","x":25,"y":75,"move":false},{"type":"point","x":75,"y":25,"move":false},{"type":"close"},{"type":"point","x":-200,"y":250,"move":true},{"type":"point","x":-25,"y":75,"move":false},{"type":"point","x":-75,"y":25,"move":false},{"type":"point","x":-250,"y":200,"move":false},{"type":"close"},{"type":"fill","r":75,"g":25,"b":25},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), damageBoost(_,bullet,enemy) {
            if (enemy.hitMarkers) {
                enemy.hitMarkers++;
                return Math.log2(enemy.hitMarkers/10+2);
            } else {
                enemy.hitMarkers = 1;
                return 1;
            }
        }
    }
]

artifacts.forEach((item) => {
    item.type = "artifact"
    Object.keys(item).forEach((item2) => {
        if (typeof item[item2] == "function") item[item2] = item[item2].bind(item);
    })
});

class Item {
    constructor(x,y,reference, rarity, type) {
        this.x = x || 0;
        this.y = y || 0;
        this.rarity = rarity || 0;
        if (!rarity && rarity !== 0) {
            let randomNum = random(game.regionNum*2,true);
            if (randomNum < 0.65) this.rarity = 0;
            else if (randomNum < 0.90) this.rarity = 1;
            else if (randomNum < 0.98) this.rarity = 2;
            else if (randomNum < 0.9975) this.rarity = 3;
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
                case "artifact": {
                    this.reference = artifacts[Math.floor(Math.random()*artifacts.length)];
                    break;
                }
                default: {
                    console.log("Invalid Type")
                }
            }
        }
        else if (Math.random() < 0.12) this.reference = weapons[Math.floor(Math.random()*weapons.length)];
        else this.reference = relics[Math.floor(Math.random()*relics.length)];
    } 
}

let items = [];

function itemTick() {
    let closestIndex = -1;
    let closestDist = Infinity;
    items.forEach((item, i) => {
        const dist = Math.hypot(player.x-item.x,player.y-item.y);
        if (dist < closestDist && dist < 100) {
            closestDist = dist;
            closestIndex = i;
        }
        items.forEach((item2,i2) => {
            if (i == i2) return;
            if (item.x == item2.x && item.y == item2.y) {
                item2.x++;
                item2.y++;
            }
            const dist = {x:item2.x-item.x, y:item2.y-item.y};
            dist.hypot = Math.hypot(dist.x,dist.y);
            if (dist.hypot < 100) {
                item.x += (100-dist.x)/dist.hypot;
                item.y += (100-dist.y)/dist.hypot;
                item2.x -= (100-dist.x)/dist.hypot;
                item2.y -= (100-dist.y)/dist.hypot;
            }
        });
    });
    items.forEach((item, i) => {
        if (Math.abs(item.x) > 700-50) {
            item.x = Math.sign(item.x)*(700-50);
        }
        if (Math.abs(item.y) > 250-50) {
            item.y = Math.sign(item.y+100)*(250-50);
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
        if (item.reference.type == "artifact") ctx.fillStyle = "#cc5555"
        else switch(item.rarity) {
            case 1: {
                ctx.fillStyle = "#55cc55"
                break; 
            }
            case 2: { 
                ctx.fillStyle = "#5577cc"
                break; 
            }
            case 3: { 
                ctx.fillStyle = "#cccc55"
                break; 
            }
            case 4: { 
                ctx.fillStyle = "#9955cc"
                break; 
            }
            default: { 
                ctx.fillStyle = "#999999"
                break; 
            }
        }
        ctx.fillStyle += "77";
        ctx.strokeStyle = "#222";

        const size = (75+10*(i === closestIndex));
        switch(item.reference.type) {
            case "artifact": {
                ctx.moveTo(item.x,item.y-size);
                ctx.lineTo(item.x-size*0.866,item.y+size*0.5);
                ctx.lineTo(item.x+size*0.866,item.y+size*0.5);
                break;
            }
            case "weapon": {
                ctx.moveTo(item.x+size,item.y);
                ctx.lineTo(item.x+size*0.5,item.y+size*0.866);
                ctx.lineTo(item.x-size*0.5,item.y+size*0.866);
                ctx.lineTo(item.x-size,item.y);
                ctx.lineTo(item.x-size*0.5,item.y-size*0.866);
                ctx.lineTo(item.x+size*0.5,item.y-size*0.866);
                break;
            }
            default: {
                ctx.moveTo(item.x-size,item.y);
                ctx.lineTo(item.x,item.y+size);
                ctx.lineTo(item.x+size,item.y);
                ctx.lineTo(item.x,item.y-size);
                break;
            }
        }
        ctx.closePath();
        ctx.fill();
        if (false) if (item.reference.type == "artifact") {
            ctx.lineWidth *= 2;
            ctx.stroke();
            ctx.lineWidth /= 2;
            ctx.strokeStyle = "#c22";
        }
        ctx.stroke();

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
        //ctx.fill();
        //ctx.stroke();

        ctx.font = "30px Share Tech";
        let name = "";

        if (item.reference.type == "artifact") ctx.fillStyle = "#cc5555"
        else switch(item.rarity) {
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
            default: { 
                name += "Common"; 
                ctx.fillStyle = "#999"
                break; 
            }
        }

        name += " " + item.reference.name;
        const type = item.reference.type.charAt(0).toUpperCase() + item.reference.type.slice(1);
        ctx.strokeStyle = "#555";
        ctx.lineWidth = 15;
        ctx.strokeText(name, item.x,item.y+125);
        ctx.strokeText(type, item.x,item.y+90);
        ctx.strokeStyle = "#222";
        ctx.lineWidth = 9;
        ctx.strokeText(name, item.x,item.y+125);
        ctx.fillText(name, item.x,item.y+125);
        ctx.strokeText(type, item.x,item.y+90);
        ctx.fillText(type, item.x,item.y+90);

        ctx.fillStyle = "#ccc"
        ctx.font = "20px Share Tech";
        ctx.strokeStyle = "#555";
        ctx.lineWidth = 15;
        ctx.strokeText(item.reference.desc, item.x,item.y+165);
        ctx.strokeStyle = "#222";
        ctx.lineWidth = 9;
        ctx.strokeText(item.reference.desc, item.x,item.y+165);
        ctx.fillText(item.reference.desc, item.x,item.y+165);

        ctx.lineWidth = 3;
}

function updateStats() {
    const healthDifference = stats.healthMax-stats.health;
    const extraHealthDifference = stats.extraHealthMax-stats.extraHealth;
    if (stats.extraHealth === 0) extraHealth = 0;
    stats = {
        luck: 0,
        friction: 0.2,
        bulletSize: 10,
        bulletSpeed: 25,
        firerate: 18,
        damage: 0.325,
        playerSize: 25,
        playerSpeed: 2,
        health: 10,
        healthMax: 10,
        extraHealth: 3,
        extraHealthMax: 3,
        projectiles: 1, spread: Math.PI/8,
        bursts: 1,
        bloom: Math.PI/65,
        damageBoosts: [],
        onHits: [],
        onPlayerHits: [],
        expirationEffects: [],
        onSpawns: [],
        playerTicks: [],
        bulletTicks: [],
    }
    if (game.weapon.reference.statChange) {
        game.weapon.reference.statChange(game.weapon.rarity);
        if (game.weapon.reference.damageBoost) stats.damageBoosts.push([game.weapon.rarity,game.weapon.reference.damageBoost]);
        if (game.weapon.reference.onHit) stats.onHits.push([game.weapon.rarity,game.weapon.reference.onHit]);
        if (game.weapon.reference.expiration) stats.expirationEffects.push([game.weapon.rarity,game.weapon.reference.expiration]);
        if (game.weapon.reference.onPlayerHit) stats.onPlayerHits.push([game.weapon.rarity,game.weapon.reference.onPlayerHit]);
        if (game.weapon.reference.onSpawn) stats.onSpawns.push([game.weapon.rarity,game.weapon.reference.onSpawn]);
        if (game.weapon.reference.bulletTick) stats.bulletTicks.push([game.weapon.rarity,game.weapon.reference.bulletTick]);
        if (game.weapon.reference.playerTick) stats.playerTicks.push([game.weapon.rarity,game.weapon.reference.playerTick]);
    }
    game.relicsEquipped.forEach((relic) => {
        if (relic) {
            if (relic.reference.statChange) relic.reference.statChange(relic.rarity);
            if (relic.reference.damageBoost) stats.damageBoosts.push([relic.rarity,relic.reference.damageBoost]);
            if (relic.reference.onHit) stats.onHits.push([relic.rarity,relic.reference.onHit]);
            if (relic.reference.expiration) stats.expirationEffects.push([relic.rarity,relic.reference.expiration]);
            if (relic.reference.onPlayerHit) stats.onPlayerHits.push([relic.rarity,relic.reference.onPlayerHit]);
            if (relic.reference.onSpawn) stats.onSpawns.push([relic.rarity,relic.reference.onSpawn]);
            if (relic.reference.bulletTick) stats.bulletTicks.push([relic.rarity,relic.reference.bulletTick]);
            if (relic.reference.playerTick) stats.playerTicks.push([relic.rarity,relic.reference.playerTick]);
        }
    });
    game.artifactsEquipped.forEach((artifact) => {
        if (artifact) {
            if (artifact.reference.statChange) artifact.reference.statChange(artifact.rarity);
            if (artifact.reference.damageBoost) stats.damageBoosts.push([artifact.rarity,artifact.reference.damageBoost]);
            if (artifact.reference.onHit) stats.onHits.push([artifact.rarity,artifact.reference.onHit]);
            if (artifact.reference.expiration) stats.expirationEffects.push([artifact.rarity,artifact.reference.expiration]);
            if (artifact.reference.onPlayerHit) stats.onPlayerHits.push([artifact.rarity,artifact.reference.onPlayerHit]);
            if (artifact.reference.onSpawn) stats.onSpawns.push([artifact.rarity,artifact.reference.onSpawn]);
            if (artifact.reference.bulletTick) stats.bulletTicks.push([artifact.rarity,artifact .reference.bulletTick]);
            if (artifact.reference.playerTick) stats.playerTicks.push([artifact.rarity,artifact .reference.playerTick]);
        }
    });

    if (healthDifference) stats.health -= healthDifference;
    if (extraHealthDifference) stats.extraHealth -= extraHealthDifference;

    stats.health = Math.max(1,Math.min(stats.health, stats.healthMax));
    if (stats.healthMax <= 0) stats.healthMax = 1;

    stats.extraHealth = Math.min(stats.extraHealth, stats.extraHealthMax);
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
            items.splice(closestIndex,1);
            
            const itemPos = dungeon[game.dungeonPosition[0] + "," + game.dungeonPosition[1]].itemPos
            if (dungeon[game.dungeonPosition[0] + "," + game.dungeonPosition[1]].deleteItems && ( closestIndex == itemPos || closestIndex == itemPos+1 ) ) {
                items.splice(itemPos,1);
                dungeon[game.dungeonPosition[0] + "," + game.dungeonPosition[1]].deleteItems = false;
            }

            updateStats();
        } else if (closestItem.reference.type == "artifact") {
            let emptyIndex = 0;
            while (game.artifactsEquipped[emptyIndex]) emptyIndex++;
            if (emptyIndex >= game.artifactsEquipped.length) {
                game.replaceItem = true;
                game.menu = "inventory";

                return;
            };
            game.artifactsEquipped[emptyIndex] = closestItem;
            items.splice(closestIndex,1);
            updateStats();

            const itemPos = dungeon[game.dungeonPosition[0] + "," + game.dungeonPosition[1]].itemPos
            if (dungeon[game.dungeonPosition[0] + "," + game.dungeonPosition[1]].deleteItems && ( closestIndex == itemPos || closestIndex == itemPos+1 || closestIndex == itemPos+2 ) ) {
                items.splice(itemPos,2);
                dungeon[game.dungeonPosition[0] + "," + game.dungeonPosition[1]].deleteItems = false;

                if (!dungeon[game.dungeonPosition[0] + "," + game.dungeonPosition[1]].regionTransfer) dungeon[game.dungeonPosition[0] + "," + game.dungeonPosition[1]].regionTransfer = true;
            }
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

            const itemPos = dungeon[game.dungeonPosition[0] + "," + game.dungeonPosition[1]].itemPos
            if (dungeon[game.dungeonPosition[0] + "," + game.dungeonPosition[1]].deleteItems && ( closestIndex == itemPos || closestIndex == itemPos+1 ) ) {
                items.splice(itemPos,1);
                dungeon[game.dungeonPosition[0] + "," + game.dungeonPosition[1]].deleteItems = false;
            }
        }
    } else return true;
}

//scrapped
/*PR  },{
        name: "Piercing Rounds",
        desc: "Bullets pierce & gain damage when they do",
        drawPath: JSON.parse(
            `[{"type":"point","x":0,"y":-225},{"type":"point","x":-25,"y":-200},{"type":"point","x":-50,"y":-150},{"type":"point","x":-75,"y":-50},{"type":"point","x":75,"y":-50},{"type":"point","x":50,"y":-150},{"type":"point","x":25,"y":-200},{"type":"close"},{"type":"fill","r":100,"g":100,"b":50},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-75,"y":-50},{"type":"point","x":-75,"y":200},{"type":"point","x":-62.5,"y":237.5},{"type":"point","x":-25,"y":250},{"type":"point","x":25,"y":250},{"type":"point","x":62.5,"y":237.5},{"type":"point","x":75,"y":200},{"type":"point","x":75,"y":-50},{"type":"close"},{"type":"fill","r":150,"g":150,"b":50},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-100,"y":25},{"type":"point","x":-100,"y":-50},{"type":"point","x":-75,"y":-150},{"type":"point","x":-50,"y":-200},{"type":"point","x":0,"y":-250},{"type":"point","x":50,"y":-200},{"type":"point","x":75,"y":-150},{"type":"point","x":100,"y":-50},{"type":"point","x":100,"y":25},{"type":"point","x":-125,"y":-50,"move":true},{"type":"point","x":-100,"y":-150,"move":false},{"type":"point","x":-75,"y":-200,"move":false},{"type":"point","x":0,"y":-275,"move":false},{"type":"point","x":75,"y":-200,"move":false},{"type":"point","x":100,"y":-150,"move":false},{"type":"point","x":125,"y":-50,"move":false},{"type":"point","x":-125,"y":-150,"move":true},{"type":"point","x":-100,"y":-200,"move":false},{"type":"point","x":0,"y":-300,"move":false},{"type":"point","x":100,"y":-200,"move":false},{"type":"point","x":125,"y":-150,"move":false},{"type":"stroke","r":175,"g":175,"b":175}]`
        ), statChange(rarity) {
            stats.pierce = (stats.pierce || 0) + 1 + rarity;
            stats.damage *= 1.1 + 0.05*rarity;
        }, onHit(rarity,bullet,enemy) {
            bullet.damage *= 1.2 + 0.05*rarity;
        }
            
        
MS},{
        name: "Mirror Sheild",
        desc: "Melee attack that parries enemy attacks",
        drawPath: JSON.parse(
            `[{"type":"point","x":-125,"y":-300},{"type":"point","x":150,"y":-250},{"type":"point","x":150,"y":250},{"type":"point","x":-125,"y":300},{"type":"close"},{"type":"fill","r":125,"g":125,"b":125},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-100,"y":262.5},{"type":"point","x":125,"y":225},{"type":"point","x":125,"y":-225},{"type":"point","x":-100,"y":-262.5},{"type":"close"},{"type":"fill","r":150,"g":200,"b":200},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":100,"y":-200},{"type":"point","x":100,"y":-100},{"type":"point","x":62.5,"y":-112.5},{"type":"point","x":62.5,"y":-212.5},{"type":"close"},{"type":"fill","r":200,"g":200,"b":200}]`
        ),
        bulletDrawPath: JSON.parse(
            `[{"type":"point","x":0,"y":-250},{"type":"point","x":-187.5,"y":-187.5},{"type":"point","x":-250,"y":0},{"type":"point","x":-187.5,"y":187.5},{"type":"point","x":0,"y":250},{"type":"point","x":187.5,"y":187.5},{"type":"point","x":250,"y":0},{"type":"point","x":187.5,"y":-187.5},{"type":"close"},{"type":"fill","r":125,"g":225,"b":225},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":150,"y":-150},{"type":"point","x":175,"y":-100},{"type":"point","x":150,"y":-50},{"type":"point","x":100,"y":-25},{"type":"point","x":50,"y":-50},{"type":"point","x":25,"y":-100},{"type":"point","x":50,"y":-150},{"type":"point","x":100,"y":-175},{"type":"close"},{"type":"fill","r":175,"g":200,"b":200},{"type":"stroke","r":100,"g":125,"b":125}]`
        ), statChange(rarity) {
            stats.firerate *= 3 - 0.08*rarity;
            stats.damage *= 2 + 0.4*rarity;
            stats.bulletSize *= 7 + 2*rarity;
            stats.bulletSpeed *= 0.35;
            stats.lifetime = 0.2;
            stats.pierce = 5;
            stats.wallPierce = true;
            stats.projHit = true;
        }, onHit(rarity,bullet,enemy) {
            if (!bullet.triggerExpire) return;
            enemy.vx *= -1;
            enemy.vy *= -1;
            enemy.dirToTarget += Math.PI;
            if (enemy.projectile && enemy.alive > 0) {
                enemy.health = 0;
                bulletBuffer.push(new Bullet({
                    x: enemy.x, y: enemy.y, damage: bullet.damage*7,
                    speed: 1.75*Math.hypot(enemy.vx,enemy.vy),
                    direction: enemy.dirToTarget,
                    size: enemy.size*1.5,
                    drawPath: enemy.drawPath,
                    lifetime: Infinity, wallPierce: true, pierce: 2
                }))
            }
            else if (Math.hypot(enemy.vx,enemy.vy) > 20) enemy.health -= bullet.damage*6;
        }
        

        */



