const weapons = [
/*BG*/{
        name: "Basic Gun",
        desc: "Starting gun",
        drawPath: JSON.parse(
            `[{"type":"point","x":200,"y":50,"move":true},{"type":"point","x":250,"y":50},{"type":"point","x":250,"y":-50},{"type":"point","x":200,"y":-50},{"type":"point","x":200,"y":75},{"type":"point","x":-250,"y":75},{"type":"point","x":-250,"y":-75},{"type":"point","x":200,"y":-75},{"type":"close"},{"type":"point","x":-125,"y":75,"move":true},{"type":"point","x":-150,"y":175,"move":false},{"type":"point","x":-200,"y":250,"move":false},{"type":"point","x":-100,"y":250,"move":false},{"type":"point","x":-50,"y":175,"move":false},{"type":"point","x":-25,"y":75,"move":false},{"type":"move"},{"type":"fill","r":125,"g":125,"b":125},{"type":"stroke","r":75,"g":75,"b":75}]`
        ),
        bulletDrawPath: JSON.parse(
            `[{"type":"point","x":-250,"y":0},{"type":"point","x":-175,"y":-175},{"type":"point","x":0,"y":-250},{"type":"point","x":175,"y":-175},{"type":"point","x":250,"y":0},{"type":"point","x":175,"y":175},{"type":"point","x":0,"y":250},{"type":"point","x":-175,"y":175},{"type":"close"},{"type":"fill","r":100,"g":100,"b":100},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), statChange(rarity) {
            stats.damage *= 1.25 + 0.5*rarity;
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
            stats.firerate *= 0.2;
            stats.damage *= 0.3 + 0.07*rarity;
            stats.bloom *= 3
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
            stats.firerate *= 2;
            stats.damage *= 7 + 0.2*rarity;
            stats.bulletSpeed *= 0.7;
            stats.bulletSize *= 3.5 + 0.4*rarity;
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
            stats.firerate *= 1.25;
            stats.damage *= 0.85 + 0.3*rarity;
            stats.bulletSize *= 0.9;
            stats.bulletSpeed *= 0.6 + 0.1*rarity;
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
            stats.firerate *= 1.6;
            stats.damage *= 2.5;
            stats.bulletSpeed *= 2.5 + 1*rarity;
            stats.pierce = 2 + rarity;
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
            stats.firerate *= 0.11;
            stats.damage *= 0.15 + 0.03*rarity;
            stats.bulletSpeed *= 0.3 + 0.05*rarity;
            stats.bulletSize *= 1.75;
            stats.projectiles += 1;
            stats.bloom *= 2;
            stats.spread *= 0.3;
            stats.lifetime = 1;
        }
/*PC*/},{
        name: "Playing Cards",
        desc: "3 cards in a shot, increased luck",
        drawPath: JSON.parse(
            `[{"type":"point","x":-100,"y":150},{"type":"point","x":100,"y":250},{"type":"point","x":300,"y":-150},{"type":"point","x":50,"y":-275},{"type":"point","x":-150,"y":125},{"type":"close"},{"type":"fill","r":0,"g":0,"b":0},{"type":"fill","r":200,"g":200,"b":200},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":150,"y":225,"move":false},{"type":"point","x":-150,"y":225,"move":false},{"type":"point","x":-150,"y":-250,"move":false},{"type":"point","x":150,"y":-250,"move":false},{"type":"close"},{"type":"fill","r":200,"g":200,"b":200},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-100,"y":250,"move":false},{"type":"point","x":150,"y":125,"move":false},{"type":"point","x":-50,"y":-275,"move":false},{"type":"point","x":-300,"y":-150,"move":false},{"type":"close"},{"type":"fill","r":200,"g":200,"b":200},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-75,"y":-237.5,"move":false},{"type":"point","x":-75,"y":-200,"move":false},{"type":"point","x":-50,"y":-175,"move":false},{"type":"point","x":-50,"y":-212.5,"move":false},{"type":"close"},{"type":"point","x":112.5,"y":-212.5,"move":true},{"type":"point","x":100,"y":-225,"move":false},{"type":"point","x":87.5,"y":-212.5,"move":false},{"type":"point","x":112.5,"y":-187.5,"move":false},{"type":"point","x":137.5,"y":-212.5,"move":false},{"type":"point","x":125,"y":-225,"move":false},{"type":"close"},{"type":"point","x":237.5,"y":-112.5,"move":true},{"type":"point","x":237.5,"y":-137.5,"move":false},{"type":"point","x":262.5,"y":-150,"move":false},{"type":"point","x":262.5,"y":-125,"move":false},{"type":"close"},{"type":"point","x":-125,"y":-112.5,"move":true},{"type":"point","x":-125,"y":37.5,"move":false},{"type":"point","x":-12.5,"y":112.5,"move":false},{"type":"point","x":-12.5,"y":-25,"move":false},{"type":"close"},{"type":"fill","r":200,"g":100,"b":100},{"type":"stroke","r":150,"g":50,"b":50}]`
        ),
        bulletDrawPath: JSON.parse(
            `[{"type":"point","x":-250,"y":-175},{"type":"point","x":250,"y":-175},{"type":"point","x":250,"y":175},{"type":"point","x":-250,"y":175},{"type":"close"},{"type":"fill","r":200,"g":200,"b":200},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-175,"y":0,"move":false},{"type":"point","x":0,"y":-100,"move":false},{"type":"point","x":175,"y":0,"move":false},{"type":"point","x":0,"y":100,"move":false},{"type":"close"},{"type":"fill","r":200,"g":100,"b":100},{"type":"stroke","r":100,"g":50,"b":50}]`
        ), statChange(rarity) {
            stats.firerate *= 0.9;
            stats.damage *= 0.6 + 0.15*rarity;
            stats.bulletSize *= 1.5;
            stats.bulletSpeed *= 0.8;
            stats.projectiles += 2;
            stats.bloom *= 3;
            stats.spread *= 0.3;
            stats.luck++;
            if (rarity == 4) stats.luck++;
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
            stats.firerate *= 2.5;
            stats.damage *= 3.4 + 0.8*rarity;
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
            stats.firerate *= 1.5;
            stats.damage *= 1 + 0.25*rarity;
            stats.bulletSize *= 2;
            stats.bulletSpeed *= 0.85;
            stats.lifetime = 0.5;
        }, expiration(rarity,bullet) {
            bulletBuffer.push(new Bullet({
                x:bullet.x,y:bullet.y,
                damage:bullet.damage*(1 + rarity/10),size:bullet.size*(6 + 1*rarity),
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
            stats.firerate *= 4;
            stats.damage *= 8 + 2*rarity;
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
            stats.firerate *= 0.7;
            stats.damage *= 1.15 + 0.3*rarity;
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
            stats.damage *= 1.35 + 0.2*rarity;
            stats.firerate *= 0.65 - 0.1*rarity;
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
            stats.damage *= 1.85 + 0.4*rarity;
            stats.firerate *= 3;
            stats.bulletSpeed *= 0.35;
            stats.bulletSize *= 3;
            stats.projectiles *= 6 + rarity;
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
            stats.firerate *= 1.7;
            stats.damage *= 2.5 + 0.625*rarity;
            stats.bulletSize *= 5;
            stats.bulletSpeed *= 0.35;
            stats.pierce = 2;
        }
/*RE*/},{
        name: "Revolver",
        desc: "High Damage 6 shot burst",
        drawPath: JSON.parse(
            `[{"type":"point","x":-100,"y":175},{"type":"point","x":-175,"y":175},{"type":"point","x":-150,"y":25},{"type":"point","x":-100,"y":-25},{"type":"point","x":-25,"y":-50},{"type":"point","x":-25,"y":25},{"type":"point","x":-75,"y":50},{"type":"close"},{"type":"fill","r":75,"g":50,"b":0},{"type":"stroke","r":50,"g":25,"b":0},{"type":"point","x":-25,"y":-62.5,"move":false},{"type":"point","x":-25,"y":37.5,"move":false},{"type":"point","x":50,"y":37.5,"move":false},{"type":"point","x":50,"y":-62.5,"move":false},{"type":"close"},{"type":"point","x":50,"y":-50,"move":true},{"type":"point","x":250,"y":-50,"move":false},{"type":"point","x":250,"y":-25,"move":false},{"type":"point","x":50,"y":-25,"move":false},{"type":"point","x":-75,"y":50,"move":true},{"type":"point","x":-50,"y":75,"move":false},{"type":"point","x":-37.5,"y":62.5,"move":false},{"type":"point","x":-62.5,"y":37.5,"move":false},{"type":"point","x":-100,"y":-25,"move":true},{"type":"point","x":-125,"y":-62.5,"move":false},{"type":"point","x":-137.5,"y":-50,"move":false},{"type":"point","x":-112.5,"y":-12.5,"move":false},{"type":"fill","r":75,"g":75,"b":75},{"type":"stroke","r":50,"g":50,"b":50}]`
        ),
        bulletDrawPath: JSON.parse(
            `[{"type":"point","x":-250,"y":0},{"type":"point","x":-175,"y":-175},{"type":"point","x":0,"y":-250},{"type":"point","x":175,"y":-175},{"type":"point","x":250,"y":0},{"type":"point","x":175,"y":175},{"type":"point","x":0,"y":250},{"type":"point","x":-175,"y":175},{"type":"close"},{"type":"fill","r":100,"g":100,"b":100},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), statChange(rarity) {
            stats.firerate *= 7;
            stats.bursts = 6;
            stats.damage *= 4 + 1*rarity;
            stats.bulletSpeed *= 0.85;
        }
/*WC*/},{
        name: "War Comb",
        desc: "Cluster of bullets",
        drawPath: JSON.parse(
            `[{"type":"point","x":-100,"y":-250},{"type":"point","x":-175,"y":-175},{"type":"point","x":-200,"y":-50},{"type":"point","x":-200,"y":50},{"type":"point","x":-175,"y":175},{"type":"point","x":-100,"y":250},{"type":"point","x":200,"y":225},{"type":"point","x":200,"y":150},{"type":"point","x":-50,"y":125},{"type":"point","x":175,"y":100},{"type":"point","x":175,"y":25},{"type":"point","x":-25,"y":0},{"type":"point","x":175,"y":-25},{"type":"point","x":175,"y":-100},{"type":"point","x":-50,"y":-125},{"type":"point","x":200,"y":-150},{"type":"point","x":200,"y":-225},{"type":"close"},{"type":"fill","r":100,"g":100,"b":255},{"type":"stroke","r":50,"g":50,"b":50}]`
        ),
        bulletDrawPath: JSON.parse(
            `[{"type":"point","x":-250,"y":-150},{"type":"point","x":250,"y":-100},{"type":"point","x":250,"y":100},{"type":"point","x":-250,"y":150},{"type":"close"},{"type":"fill","r":100,"g":100,"b":255},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), statChange(rarity) {
            stats.firerate *= 2;
            stats.bursts = 2;
            stats.projectiles = 3;
            stats.spread *= 0.05;
            stats.bloom *= 1.5;
            stats.damage *= 0.6 + 0.15*rarity;
            stats.bulletSize *= 1.7;
        }
/*SP*/},{
        name: "Speaker",
        desc: "Shoot piercing waves that grow",
        drawPath: JSON.parse(
            `[{"type":"point","x":0,"y":-250},{"type":"point","x":125,"y":-125},{"type":"point","x":125,"y":125},{"type":"point","x":0,"y":250},{"type":"point","x":-125,"y":125},{"type":"point","x":-125,"y":-125},{"type":"close"},{"type":"fill","r":75,"g":75,"b":75},{"type":"point","x":125,"y":-125,"move":true},{"type":"point","x":0,"y":0,"move":false},{"type":"point","x":-125,"y":-125,"move":false},{"type":"point","x":0,"y":0,"move":true},{"type":"point","x":0,"y":250,"move":false},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":25,"y":0,"move":false},{"type":"point","x":100,"y":-75,"move":false},{"type":"point","x":100,"y":12.5,"move":false},{"type":"point","x":25,"y":87.5,"move":false},{"type":"close"},{"type":"point","x":100,"y":37.5,"move":true},{"type":"point","x":100,"y":125,"move":false},{"type":"point","x":25,"y":200,"move":false},{"type":"point","x":25,"y":112.5,"move":false},{"type":"close"},{"type":"fill","r":0,"g":0,"b":0},{"type":"stroke","r":50,"g":50,"b":50}]`
        ),
        bulletDrawPath: JSON.parse(
            `[{"type":"point","x":125,"y":-50},{"type":"point","x":125,"y":50},{"type":"point","x":100,"y":125},{"type":"point","x":50,"y":200},{"type":"point","x":0,"y":175},{"type":"point","x":50,"y":100},{"type":"point","x":75,"y":0},{"type":"point","x":50,"y":-100},{"type":"point","x":0,"y":-175},{"type":"point","x":50,"y":-200},{"type":"point","x":100,"y":-125},{"type":"close"},{"type":"fill","r":0,"g":175,"b":255},{"type":"stroke","r":0,"g":60,"b":80}]`
        ), statChange(rarity) {
            stats.pierce = 3;
            stats.bulletSpeed *= 0.45;
            stats.firerate *= 2;
            stats.damage *= 2 + 0.5*rarity;
            stats.bulletSize *= 7;
        }, bulletTick(rarity,bullet) {
            bullet.size *= 1.01;
        }

/*CR*/},{
        name: "Crystalizer",
        desc: "Shoot crystals turrets",
        drawPath: JSON.parse(
            `[{"type":"point","x":-250,"y":-50},{"type":"point","x":-150,"y":-150},{"type":"point","x":0,"y":-200},{"type":"point","x":150,"y":-150},{"type":"point","x":250,"y":-50},{"type":"point","x":175,"y":-25},{"type":"point","x":100,"y":-100},{"type":"point","x":0,"y":-125},{"type":"point","x":-100,"y":-100},{"type":"point","x":-175,"y":-25},{"type":"point","x":-175,"y":25},{"type":"point","x":-100,"y":100},{"type":"point","x":0,"y":125},{"type":"point","x":100,"y":100},{"type":"point","x":175,"y":25},{"type":"point","x":250,"y":50},{"type":"point","x":150,"y":150},{"type":"point","x":0,"y":200},{"type":"point","x":-150,"y":150},{"type":"point","x":-250,"y":50},{"type":"close"},{"type":"fill","r":100,"g":100,"b":100},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":0,"y":-75},{"type":"point","x":150,"y":0},{"type":"point","x":0,"y":75},{"type":"point","x":-150,"y":0},{"type":"close"},{"type":"fill","r":175,"g":25,"b":75},{"type":"stroke","r":100,"g":0,"b":50}]`
        ),
        bulletDrawPath: JSON.parse(
            `[{"type":"point","x":-250,"y":0},{"type":"point","x":0,"y":-200},{"type":"point","x":150,"y":-75},{"type":"point","x":100,"y":-37.5},{"type":"point","x":0,"y":-125},{"type":"point","x":-125,"y":-25},{"type":"point","x":-125,"y":25},{"type":"point","x":0,"y":125},{"type":"point","x":100,"y":37.5},{"type":"point","x":150,"y":75},{"type":"point","x":0,"y":200},{"type":"close"},{"type":"fill","r":100,"g":100,"b":100},{"type":"stroke","r":50,"g":50,"b":50}]`
        ),
        turretBulletDrawPath: JSON.parse(
            `[{"type":"point","x":-275,"y":0},{"type":"point","x":0,"y":-175},{"type":"point","x":275,"y":0},{"type":"point","x":0,"y":175},{"type":"close"},{"type":"fill","r":175,"g":25,"b":75},{"type":"stroke","r":100,"g":0,"b":50}]`
        ), statChange(rarity) {
            stats.bulletSpeed *= 0.02;
            stats.firerate *= 2;
            stats.damage *= 3 + 0.75*rarity;
            stats.bulletSize *= 4;
            stats.lifetime = 3.5;
        }, bulletTick(rarity,bullet) {
            if (bullet.tick%25 < 1 && bullet.tick > 20) {
                bulletBuffer.push(new Bullet({lifetime: bullet.lifetime*2, drawPath: this.turretBulletDrawPath, x: bullet.x, y: bullet.y, size: bullet.size / 2, damage: bullet.damage / 2.5, speed: bullet.speed * 30, direction: bullet.direction, trailColor: bullet.trailColor, trailLength: bullet.trailLength || 8, projHit: bullet.projHit}))
            }
        }
/*GL*/},{
        name: "Grenade Launcher",
        desc: "Lob shots that explode",
        drawPath: JSON.parse(
            `[{"type":"point","x":37.5,"y":37.5,"move":false},{"type":"point","x":262.5,"y":37.5,"move":false},{"type":"point","x":262.5,"y":93.75,"move":false},{"type":"point","x":300,"y":93.75,"move":false},{"type":"point","x":300,"y":18.75,"move":false},{"type":"point","x":375,"y":18.75,"move":false},{"type":"point","x":375,"y":-37.5,"move":false},{"type":"point","x":300,"y":-37.5,"move":false},{"type":"point","x":281.25,"y":-56.25,"move":false},{"type":"point","x":-375,"y":-56.25,"move":false},{"type":"point","x":-337.5,"y":112.5,"move":false},{"type":"point","x":-300,"y":112.5,"move":false},{"type":"point","x":-281.25,"y":37.5,"move":false},{"type":"point","x":-187.5,"y":37.5,"move":false},{"type":"point","x":-168.75,"y":75,"move":false},{"type":"point","x":-225,"y":187.5,"move":false},{"type":"point","x":-150,"y":187.5,"move":false},{"type":"point","x":-112.5,"y":112.5,"move":false},{"type":"close"},{"type":"fill","r":100,"g":100,"b":100},{"type":"point","x":300,"y":-37.5,"move":true},{"type":"point","x":300,"y":37.5,"move":false},{"type":"point","x":262.5,"y":37.5,"move":false},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-93.75,"y":18.75,"move":false},{"type":"point","x":37.5,"y":18.75,"move":false},{"type":"point","x":37.5,"y":206.25,"move":false},{"type":"point","x":-93.75,"y":206.25,"move":false},{"type":"close"},{"type":"fill","r":20,"g":40,"b":20},{"type":"stroke","r":35,"g":50,"b":35}]`
        ),
        bulletDrawPath: JSON.parse(
            `[{"type":"point","x":-100,"y":-25},{"type":"point","x":-75,"y":-50},{"type":"point","x":50,"y":-50},{"type":"point","x":150,"y":0},{"type":"point","x":50,"y":50},{"type":"point","x":-75,"y":50},{"type":"point","x":-100,"y":25},{"type":"close"},{"type":"fill","r":0,"g":20,"b":0},{"type":"stroke","r":20,"g":50,"b":20}]`
        ), bombPath: JSON.parse(
            `[{"type":"point","x":100,"y":-250},{"type":"point","x":250,"y":-100},{"type":"point","x":250,"y":100},{"type":"point","x":100,"y":250},{"type":"point","x":-100,"y":250},{"type":"point","x":-250,"y":100},{"type":"point","x":-250,"y":-100},{"type":"point","x":-100,"y":-250},{"type":"close"},{"type":"fill","r":255,"g":0,"b":0},{"type":"stroke","r":255,"g":75,"b":25},{"type":"point","x":0,"y":-175},{"type":"point","x":125,"y":-125},{"type":"point","x":175,"y":0},{"type":"point","x":125,"y":125},{"type":"point","x":0,"y":175},{"type":"point","x":-125,"y":125},{"type":"point","x":-175,"y":0},{"type":"point","x":-125,"y":-125},{"type":"close"},{"type":"fill","r":255,"g":150,"b":0},{"type":"stroke","r":125,"g":0,"b":0}]`
        ), statChange(rarity) {
            stats.pierce = 2;
            stats.bulletSpeed *= 1;
            stats.firerate *= 2;
            stats.damage *= 5 + 1.25*rarity;
            stats.bulletSize *= 2.5 + 0.2*rarity;
            stats.lifetime = 0.45;
        }, expiration(_, bullet) {
            bulletBuffer.push(new Bullet({x: bullet.x, y: bullet.y, speed: 0, size: bullet.size*6 + 65, damage: bullet.damage**1.1*0.7 + 0.15, drawPath: this.bombPath, lifetime: 0.3, wallPierce: true, pierce: 10,direction:Math.random()*Math.PI,drawAlpha:0.4}))
        }, damageBoost(_,bullet) {
            return 1-0.9*!!bullet.triggerExpire
        }
/*PC*/},{
        name: "Purple Qub",
        desc: "Firing deals damage to enemies near your mouse",
        drawPath: JSON.parse(
            `[{"type":"point","x":-200,"y":225},{"type":"point","x":-225,"y":200},{"type":"point","x":-250,"y":125},{"type":"point","x":-250,"y":-125},{"type":"point","x":-225,"y":-200},{"type":"point","x":-200,"y":-225},{"type":"point","x":-125,"y":-250},{"type":"point","x":125,"y":-250},{"type":"point","x":200,"y":-225},{"type":"point","x":225,"y":-200},{"type":"point","x":250,"y":-125},{"type":"point","x":250,"y":125},{"type":"point","x":225,"y":200},{"type":"point","x":200,"y":225},{"type":"point","x":125,"y":250},{"type":"point","x":-125,"y":250},{"type":"close"},{"type":"fill","r":115,"g":65,"b":205},{"type":"point","x":-100,"y":-150,"move":true},{"type":"point","x":-100,"y":50,"move":false},{"type":"point","x":100,"y":50,"move":true},{"type":"point","x":100,"y":-150,"move":false},{"type":"stroke","r":0,"g":0,"b":0},{"type":"point","x":-100,"y":-150,"move":false},{"type":"point","x":-75,"y":-150,"move":false},{"type":"point","x":-75,"y":50,"move":false},{"type":"point","x":-100,"y":50,"move":false},{"type":"point","x":-100,"y":-150,"move":false},{"type":"point","x":100,"y":-150,"move":true},{"type":"point","x":100,"y":50,"move":false},{"type":"point","x":75,"y":50,"move":false},{"type":"point","x":75,"y":-150,"move":false},{"type":"point","x":100,"y":-150,"move":false},{"type":"point","x":-125,"y":-250,"move":true},{"type":"point","x":-200,"y":-225,"move":false},{"type":"point","x":-225,"y":-200,"move":false},{"type":"point","x":-250,"y":-125,"move":false},{"type":"point","x":-250,"y":125,"move":false},{"type":"point","x":-225,"y":200,"move":false},{"type":"point","x":-200,"y":225,"move":false},{"type":"point","x":-125,"y":250,"move":false},{"type":"point","x":125,"y":250,"move":false},{"type":"point","x":200,"y":225,"move":false},{"type":"point","x":225,"y":200,"move":false},{"type":"point","x":250,"y":125,"move":false},{"type":"point","x":250,"y":-125,"move":false},{"type":"point","x":225,"y":-200,"move":false},{"type":"point","x":200,"y":-225,"move":false},{"type":"point","x":125,"y":-250,"move":false},{"type":"close"},{"type":"point","x":-125,"y":-237.5,"move":true},{"type":"point","x":125,"y":-237.5,"move":false},{"type":"point","x":187.5,"y":-212.5,"move":false},{"type":"point","x":212.5,"y":-187.5,"move":false},{"type":"point","x":237.5,"y":-125,"move":false},{"type":"point","x":237.5,"y":125,"move":false},{"type":"point","x":212.5,"y":187.5,"move":false},{"type":"point","x":187.5,"y":212.5,"move":false},{"type":"point","x":125,"y":237.5,"move":false},{"type":"point","x":-125,"y":237.5,"move":false},{"type":"point","x":-187.5,"y":212.5,"move":false},{"type":"point","x":-212.5,"y":187.5,"move":false},{"type":"point","x":-237.5,"y":125,"move":false},{"type":"point","x":-237.5,"y":-125,"move":false},{"type":"point","x":-212.5,"y":-187.5,"move":false},{"type":"point","x":-187.5,"y":-212.5,"move":false},{"type":"close"},{"type":"fill","r":0,"g":0,"b":0},{"type":"stroke","r":0,"g":0,"b":5},{"type":"point","x":-112.5,"y":-62.5,"move":false},{"type":"point","x":-87.5,"y":-62.5,"move":false},{"type":"point","x":-87.5,"y":-37.5,"move":false},{"type":"point","x":-112.5,"y":-37.5,"move":false},{"type":"close"},{"type":"point","x":62.5,"y":-62.5,"move":true},{"type":"point","x":87.5,"y":-62.5,"move":false},{"type":"point","x":87.5,"y":-37.5,"move":false},{"type":"point","x":62.5,"y":-37.5,"move":false},{"type":"close"},{"type":"fill","r":255,"g":255,"b":255}]`
        ), bulletDrawPath: JSON.parse(
            `[{"type":"point","x":250,"y":-250},{"type":"point","x":0,"y":-100},{"type":"point","x":-250,"y":-250},{"type":"point","x":-100,"y":0},{"type":"point","x":-250,"y":250},{"type":"point","x":0,"y":100},{"type":"point","x":250,"y":250},{"type":"point","x":100,"y":0},{"type":"point","x":250,"y":-250},{"type":"fill","r":115,"g":65,"b":205},{"type":"stroke","r":0,"g":0,"b":0}]`
        ), statChange(rarity) {
            stats.damage *= 2 + 0.5 * rarity;
            stats.qub = true;
            stats.firerate * 1.6;
            stats.bulletSize *= 5 + rarity;
            stats.bloom *= 2.5;
            stats.bulletSpeed  *= -0.1;
            stats.lifetime = 0.1;
        }
/*SL*/},{
        name: "S.A.M. Launcher",
        desc: "Fire a large burst of exploding missiles",
        drawPath: JSON.parse(
            `[{"type":"point","x":-187.5,"y":-125},{"type":"point","x":171.875,"y":-125},{"type":"point","x":187.5,"y":-109.375},{"type":"point","x":187.5,"y":-125},{"type":"point","x":296.875,"y":-125},{"type":"point","x":312.5,"y":-109.375},{"type":"point","x":312.5,"y":78.125},{"type":"point","x":296.875,"y":93.75},{"type":"point","x":187.5,"y":93.75},{"type":"point","x":187.5,"y":78.125},{"type":"point","x":171.875,"y":93.75},{"type":"point","x":-187.5,"y":93.75},{"type":"point","x":-281.25,"y":62.5},{"type":"point","x":-296.875,"y":-15.625},{"type":"point","x":-281.25,"y":-93.75},{"type":"close"},{"type":"point","x":-62.5,"y":93.75,"move":true},{"type":"point","x":-109.375,"y":156.25,"move":false},{"type":"point","x":-156.25,"y":187.5,"move":false},{"type":"point","x":-125,"y":203.125,"move":false},{"type":"point","x":-78.125,"y":171.875,"move":false},{"type":"point","x":-15.625,"y":93.75,"move":false},{"type":"fill","r":175,"g":175,"b":125},{"type":"point","x":187.5,"y":-78.125,"move":true},{"type":"point","x":187.5,"y":46.875,"move":false},{"type":"point","x":296.875,"y":-78.125,"move":true},{"type":"point","x":296.875,"y":46.875,"move":false},{"type":"point","x":-171.875,"y":-78.125,"move":true},{"type":"point","x":-171.875,"y":46.875,"move":false},{"type":"point","x":-140.625,"y":-15.625,"move":true},{"type":"point","x":140.625,"y":-15.625,"move":false},{"type":"point","x":-140.625,"y":-78.125,"move":true},{"type":"point","x":-78.125,"y":-78.125,"move":false},{"type":"point","x":140.625,"y":-78.125,"move":true},{"type":"point","x":78.125,"y":-78.125,"move":false},{"type":"point","x":-140.625,"y":46.875,"move":true},{"type":"point","x":-78.125,"y":46.875,"move":false},{"type":"point","x":78.125,"y":46.875,"move":true},{"type":"point","x":140.625,"y":46.875,"move":false},{"type":"stroke","r":50,"g":50,"b":50}]`
        ),
        bulletDrawPath: JSON.parse(
            `[{"type":"point","x":-250,"y":-100},{"type":"point","x":200,"y":-100},{"type":"point","x":300,"y":0},{"type":"point","x":200,"y":100},{"type":"point","x":-250,"y":100},{"type":"close"},{"type":"fill","r":175,"g":175,"b":100},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), bombPath: JSON.parse(
            `[{"type":"point","x":100,"y":-250},{"type":"point","x":250,"y":-100},{"type":"point","x":250,"y":100},{"type":"point","x":100,"y":250},{"type":"point","x":-100,"y":250},{"type":"point","x":-250,"y":100},{"type":"point","x":-250,"y":-100},{"type":"point","x":-100,"y":-250},{"type":"close"},{"type":"fill","r":255,"g":0,"b":0},{"type":"stroke","r":255,"g":75,"b":25},{"type":"point","x":0,"y":-175},{"type":"point","x":125,"y":-125},{"type":"point","x":175,"y":0},{"type":"point","x":125,"y":125},{"type":"point","x":0,"y":175},{"type":"point","x":-125,"y":125},{"type":"point","x":-175,"y":0},{"type":"point","x":-125,"y":-125},{"type":"close"},{"type":"fill","r":255,"g":150,"b":0},{"type":"stroke","r":125,"g":0,"b":0}]`
        ), statChange(rarity) {
            stats.bulletSpeed *= 0.5;
            stats.firerate *= 7;
            stats.projectiles = 2;
            stats.bursts = 12 + 3*rarity;
            stats.bloom *= 6;
            stats.spread *= 0.2;
            stats.damage *= 0.4;
            stats.trailColor = "#c90";
            stats.trailLength = 15;
            stats.sineWaveMovement = true;
        }, expiration(_, bullet) {
            bulletBuffer.push(new Bullet({x: bullet.x, y: bullet.y, speed: 0, size: bullet.size*6 + 65, damage: bullet.damage**1.1*0.7 + 0.15, drawPath: this.bombPath, lifetime: 0.3, wallPierce: true, pierce: 10,direction:Math.random()*Math.PI,drawAlpha:0.4}))
        }
/*GR*/},{
        name: "Guided R.P.G.",
        desc: "Fire a homing missle with massive damage",
        drawPath: JSON.parse(
            `[{"type":"point","x":125,"y":-62.5},{"type":"point","x":156.25,"y":-31.25},{"type":"point","x":218.75,"y":-31.25},{"type":"point","x":250,"y":-62.5},{"type":"point","x":406.25,"y":-62.5},{"type":"point","x":500,"y":-31.25},{"type":"point","x":500,"y":31.25},{"type":"point","x":406.25,"y":62.5},{"type":"point","x":250,"y":62.5},{"type":"point","x":218.75,"y":31.25},{"type":"point","x":156.25,"y":31.25},{"type":"point","x":125,"y":62.5},{"type":"close"},{"type":"fill","r":0,"g":50,"b":0},{"type":"stroke","r":0,"g":25,"b":0},{"type":"point","x":125,"y":-31.25},{"type":"point","x":-359.375,"y":-31.25},{"type":"point","x":-375,"y":0},{"type":"point","x":-359.375,"y":31.25},{"type":"point","x":-93.75,"y":31.25,"move":false},{"type":"point","x":-125,"y":93.75,"move":false},{"type":"point","x":-156.25,"y":125,"move":false},{"type":"point","x":-125,"y":140.625,"move":false},{"type":"point","x":-78.125,"y":93.75,"move":false},{"type":"point","x":-46.875,"y":31.25,"move":false},{"type":"point","x":125,"y":31.25,"move":false},{"type":"fill","r":50,"g":50,"b":50},{"type":"stroke","r":25,"g":25,"b":25}]`
        ),
        bulletDrawPath: JSON.parse(
            `[{"type":"point","x":-125,"y":-50},{"type":"point","x":-100,"y":-25},{"type":"point","x":-50,"y":-25},{"type":"point","x":-25,"y":-50},{"type":"point","x":100,"y":-50},{"type":"point","x":175,"y":-25},{"type":"point","x":175,"y":25},{"type":"point","x":100,"y":50},{"type":"point","x":-25,"y":50},{"type":"point","x":-50,"y":25},{"type":"point","x":-100,"y":25},{"type":"point","x":-125,"y":50},{"type":"close"},{"type":"fill","r":0,"g":50,"b":0},{"type":"stroke","r":0,"g":25,"b":0},{"type":"point","x":-125,"y":-25},{"type":"point","x":-175,"y":-12.5},{"type":"point","x":-162.5,"y":0},{"type":"point","x":-175,"y":12.5},{"type":"point","x":-125,"y":25},{"type":"fill","r":250,"g":100,"b":0},{"type":"stroke","r":100,"g":50,"b":0}]`
        ), bombPath: JSON.parse(
            `[{"type":"point","x":100,"y":-250},{"type":"point","x":250,"y":-100},{"type":"point","x":250,"y":100},{"type":"point","x":100,"y":250},{"type":"point","x":-100,"y":250},{"type":"point","x":-250,"y":100},{"type":"point","x":-250,"y":-100},{"type":"point","x":-100,"y":-250},{"type":"close"},{"type":"fill","r":255,"g":0,"b":0},{"type":"stroke","r":255,"g":75,"b":25},{"type":"point","x":0,"y":-175},{"type":"point","x":125,"y":-125},{"type":"point","x":175,"y":0},{"type":"point","x":125,"y":125},{"type":"point","x":0,"y":175},{"type":"point","x":-125,"y":125},{"type":"point","x":-175,"y":0},{"type":"point","x":-125,"y":-125},{"type":"close"},{"type":"fill","r":255,"g":150,"b":0},{"type":"stroke","r":125,"g":0,"b":0}]`
        ), statChange(rarity) {
            stats.bulletSpeed *= 0.4;
            stats.firerate *= 7;
            stats.bulletSize *= 5;
            stats.bloom *= 0.5;
            stats.spread *= 0.2;
            stats.damage *= 10 + 3*rarity;
            stats.trailColor = "#c50";
            stats.trailLength = 15;
            //stats.sineWaveMovement = true;
        }, expiration(_, bullet) {
            bulletBuffer.push(new Bullet({x: bullet.x, y: bullet.y, speed: 0, size: bullet.size*6 + 65, damage: bullet.damage**1.1*0.7 + 0.15, drawPath: this.bombPath, lifetime: 0.3, wallPierce: true, pierce: 10,direction:Math.random()*Math.PI,drawAlpha:0.4}))
        }, bulletTick(_,bullet) {
            closestDist = Infinity;
            closest = -1;
            enemies.forEach( (enemy,i) => {
                if (enemy.projectile) return;
                const dist = Math.hypot(enemy.x-bullet.x,enemy.y-bullet.y)-enemy.size-bullet.size;
                if (dist < 800 && dist > 25 && dist < closestDist) {
                    closestDist = dist;
                    closest = i;
                }
            })

            if (closest != -1) {
                bullet.vx = (enemies[closest].x-bullet.x)/closestDist/2 + bullet.vx*0.98;
                bullet.vy = (enemies[closest].y-bullet.y)/closestDist/2 + bullet.vy*0.98;
                if (bullet.tick%10 < 1) {
                    bullet.direction = (Math.atan(bullet.vy/bullet.vx) + Math.PI*(bullet.vx < 0)) || (Math.PI*(bullet.vx < 0));
                }
            }
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
            stats.damage *= 1.20 + 0.05*rarity;
            stats.bulletSize *= 1.60 + 0.2*rarity;
        }
/*SR*/},{
        name: "Sluggish Rounds",
        desc: "Increased bullet damage, reduced speed",
        drawPath: JSON.parse(
            `[{"type":"point","x":-225,"y":-75},{"type":"point","x":-200,"y":-100},{"type":"point","x":-150,"y":-125},{"type":"point","x":-100,"y":-125},{"type":"point","x":-75,"y":-100},{"type":"point","x":-50,"y":-50},{"type":"point","x":-75,"y":-25},{"type":"point","x":-125,"y":0},{"type":"point","x":-175,"y":0},{"type":"point","x":-200,"y":-25},{"type":"close"},{"type":"point","x":-125,"y":-200},{"type":"point","x":-50,"y":-250},{"type":"point","x":25,"y":-275},{"type":"point","x":50,"y":-275},{"type":"point","x":50,"y":-250},{"type":"point","x":25,"y":-150},{"type":"point","x":-50,"y":-50},{"type":"fill","r":100,"g":100,"b":100},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":0,"y":-125},{"type":"point","x":50,"y":-100},{"type":"point","x":100,"y":-125},{"type":"point","x":150,"y":-75},{"type":"point","x":100,"y":0},{"type":"point","x":25,"y":25},{"type":"point","x":-25,"y":75},{"type":"point","x":0,"y":125},{"type":"point","x":50,"y":100},{"type":"point","x":50,"y":100,"move":true},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":50,"y":100,"move":false},{"type":"point","x":75,"y":50,"move":false},{"type":"point","x":125,"y":25,"move":false},{"type":"point","x":175,"y":50,"move":false},{"type":"point","x":200,"y":100,"move":false},{"type":"point","x":175,"y":150,"move":false},{"type":"point","x":125,"y":175,"move":false},{"type":"point","x":75,"y":150,"move":false},{"type":"close"},{"type":"fill","r":25,"g":25,"b":25},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), statChange(rarity) {
            stats.damage *= 1.35 + 0.1*rarity;
            stats.bulletSpeed *= 0.35 + 0.025*rarity;
        }
/*IC*/},{
        name: "Ice Cube",
        desc: "Increases player & bullet speed",
        drawPath: JSON.parse(
            `[{"type":"point","x":-50,"y":-200},{"type":"point","x":-200,"y":-125},{"type":"point","x":25,"y":-50},{"type":"point","x":175,"y":-125},{"type":"close"},{"type":"point","x":-200,"y":-125,"move":true},{"type":"point","x":-200,"y":100,"move":false},{"type":"point","x":25,"y":175,"move":false},{"type":"point","x":25,"y":-50,"move":false},{"type":"point","x":25,"y":175,"move":false},{"type":"point","x":175,"y":100,"move":false},{"type":"point","x":175,"y":-125,"move":false},{"type":"fill","r":100,"g":150,"b":175},{"type":"stroke","r":50,"g":100,"b":150},{"type":"point","x":-200,"y":25,"move":false},{"type":"point","x":-225,"y":50,"move":false},{"type":"point","x":-250,"y":125,"move":false},{"type":"point","x":-175,"y":200,"move":false},{"type":"point","x":25,"y":250,"move":false},{"type":"point","x":175,"y":225,"move":false},{"type":"point","x":250,"y":150,"move":false},{"type":"point","x":250,"y":75,"move":false},{"type":"point","x":200,"y":25,"move":false},{"type":"point","x":175,"y":25,"move":false},{"type":"point","x":175,"y":100,"move":false},{"type":"point","x":25,"y":175,"move":false},{"type":"point","x":-200,"y":100,"move":false},{"type":"close"},{"type":"fill","r":100,"g":150,"b":175},{"type":"stroke","r":50,"g":100,"b":150}]`
        ), statChange(rarity) {
            stats.friction *= 0.95-0.025*rarity;
            stats.playerSpeed *= 1.2+0.1*rarity;
            stats.bulletSpeed *= 1.2+0.1*rarity;
        }
/*AI*/},{
        name: "After Images",
        desc: "Increases fire rate but reduces damage",
        drawPath: JSON.parse(
            `[{"type":"point","x":-275,"y":-25},{"type":"point","x":-250,"y":-100},{"type":"point","x":-200,"y":-150},{"type":"point","x":-125,"y":-175},{"type":"point","x":-75,"y":-175},{"type":"point","x":0,"y":-150},{"type":"point","x":50,"y":-100},{"type":"point","x":75,"y":-25},{"type":"point","x":75,"y":25},{"type":"point","x":50,"y":100},{"type":"point","x":0,"y":150},{"type":"point","x":-75,"y":175},{"type":"point","x":-125,"y":175},{"type":"point","x":-200,"y":150},{"type":"point","x":-250,"y":100},{"type":"point","x":-275,"y":25},{"type":"close"},{"type":"fill","r":175,"g":200,"b":250},{"type":"stroke","r":50,"g":100,"b":150},{"type":"point","x":0,"y":-150},{"type":"point","x":-75,"y":-125},{"type":"point","x":-125,"y":-75},{"type":"point","x":-150,"y":0},{"type":"point","x":-125,"y":75},{"type":"point","x":-75,"y":125},{"type":"point","x":0,"y":150},{"type":"point","x":75,"y":125},{"type":"point","x":125,"y":75},{"type":"point","x":150,"y":0},{"type":"point","x":125,"y":-75},{"type":"point","x":75,"y":-125},{"type":"close"},{"type":"fill","r":75,"g":125,"b":125},{"type":"stroke","r":50,"g":100,"b":150},{"type":"point","x":150,"y":-125},{"type":"point","x":200,"y":-100},{"type":"point","x":225,"y":-75},{"type":"point","x":250,"y":-25},{"type":"point","x":250,"y":25},{"type":"point","x":225,"y":75},{"type":"point","x":200,"y":100},{"type":"point","x":150,"y":125},{"type":"point","x":100,"y":125},{"type":"point","x":50,"y":100},{"type":"point","x":25,"y":75},{"type":"point","x":0,"y":25},{"type":"point","x":0,"y":-25},{"type":"point","x":25,"y":-75},{"type":"point","x":50,"y":-100},{"type":"point","x":100,"y":-125},{"type":"close"},{"type":"fill","r":50,"g":125,"b":125},{"type":"stroke","r":50,"g":100,"b":125}]`
        ), statChange(rarity) {
            stats.firerate *= 0.65-0.08*rarity;
            stats.damage *= 0.85+0.015*rarity;
        }
/*RF*/},{
        name: "Rifling",
        desc: "Increases damage and bullet speed",
        drawPath: JSON.parse(
            `[{"type":"point","x":-250,"y":-50},{"type":"point","x":-225,"y":-150},{"type":"point","x":-150,"y":-225},{"type":"point","x":-50,"y":-250},{"type":"point","x":50,"y":-250},{"type":"point","x":150,"y":-225},{"type":"point","x":225,"y":-150},{"type":"point","x":250,"y":-50},{"type":"point","x":250,"y":50},{"type":"point","x":225,"y":150},{"type":"point","x":150,"y":225},{"type":"point","x":50,"y":250},{"type":"point","x":-50,"y":250},{"type":"point","x":-150,"y":225},{"type":"point","x":-225,"y":150},{"type":"point","x":-250,"y":50},{"type":"close"},{"type":"fill","r":100,"g":100,"b":100},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-250,"y":-50,"move":false},{"type":"point","x":-125,"y":-125,"move":false},{"type":"point","x":-50,"y":-125,"move":false},{"type":"point","x":25,"y":-100,"move":false},{"type":"point","x":50,"y":-50,"move":false},{"type":"point","x":25,"y":0,"move":false},{"type":"point","x":0,"y":0,"move":false},{"type":"point","x":25,"y":-50,"move":false},{"type":"point","x":0,"y":-75,"move":false},{"type":"point","x":-75,"y":-100,"move":false},{"type":"point","x":-175,"y":-50,"move":false},{"type":"point","x":-250,"y":50,"move":false},{"type":"close"},{"type":"point","x":50,"y":-250,"move":true},{"type":"point","x":125,"y":-125,"move":false},{"type":"point","x":125,"y":-50,"move":false},{"type":"point","x":100,"y":25,"move":false},{"type":"point","x":50,"y":50,"move":false},{"type":"point","x":0,"y":25,"move":false},{"type":"point","x":0,"y":0,"move":false},{"type":"point","x":50,"y":25,"move":false},{"type":"point","x":75,"y":0,"move":false},{"type":"point","x":100,"y":-75,"move":false},{"type":"point","x":50,"y":-175,"move":false},{"type":"point","x":-50,"y":-250,"move":false},{"type":"close"},{"type":"point","x":250,"y":50,"move":true},{"type":"point","x":125,"y":125,"move":false},{"type":"point","x":50,"y":125,"move":false},{"type":"point","x":-25,"y":100,"move":false},{"type":"point","x":-50,"y":50,"move":false},{"type":"point","x":-25,"y":0,"move":false},{"type":"point","x":0,"y":0,"move":false},{"type":"point","x":-25,"y":50,"move":false},{"type":"point","x":0,"y":75,"move":false},{"type":"point","x":75,"y":100,"move":false},{"type":"point","x":175,"y":50,"move":false},{"type":"point","x":250,"y":-50,"move":false},{"type":"close"},{"type":"point","x":-50,"y":250,"move":true},{"type":"point","x":-125,"y":125,"move":false},{"type":"point","x":-125,"y":50,"move":false},{"type":"point","x":-100,"y":-25,"move":false},{"type":"point","x":-50,"y":-50,"move":false},{"type":"point","x":0,"y":-25,"move":false},{"type":"point","x":0,"y":0,"move":false},{"type":"point","x":-50,"y":-25,"move":false},{"type":"point","x":-75,"y":0,"move":false},{"type":"point","x":-100,"y":75,"move":false},{"type":"point","x":-50,"y":175,"move":false},{"type":"point","x":50,"y":250,"move":false},{"type":"close"},{"type":"fill","r":25,"g":25,"b":25},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), statChange(rarity) {
            stats.damage *= 1.25 + 0.08*rarity;
            stats.bulletSpeed *= 1.55 + 0.05*rarity;
            stats.bloom *= 0.8;
        }
/*LT*/},{
        name: "Lottery Ticket",
        desc: "Chance for bullets to have massive damage",
        drawPath: JSON.parse(
            `[{"type":"point","x":-250,"y":-125},{"type":"point","x":250,"y":-250},{"type":"point","x":250,"y":125},{"type":"point","x":-250,"y":250},{"type":"close"},{"type":"fill","r":225,"g":220,"b":175},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-150,"y":175,"move":false},{"type":"point","x":-200,"y":150,"move":false},{"type":"point","x":-225,"y":100,"move":false},{"type":"point","x":-200,"y":50,"move":false},{"type":"point","x":-150,"y":25,"move":false},{"type":"point","x":-100,"y":50,"move":false},{"type":"point","x":-75,"y":100,"move":false},{"type":"point","x":-100,"y":150,"move":false},{"type":"close"},{"type":"point","x":0,"y":125,"move":true},{"type":"point","x":-50,"y":100,"move":false},{"type":"point","x":-75,"y":50,"move":false},{"type":"point","x":-50,"y":0,"move":false},{"type":"point","x":0,"y":-25,"move":false},{"type":"point","x":50,"y":0,"move":false},{"type":"point","x":75,"y":50,"move":false},{"type":"point","x":50,"y":100,"move":false},{"type":"close"},{"type":"point","x":75,"y":0,"move":true},{"type":"point","x":100,"y":50,"move":false},{"type":"point","x":150,"y":75,"move":false},{"type":"point","x":200,"y":50,"move":false},{"type":"point","x":225,"y":0,"move":false},{"type":"point","x":200,"y":-50,"move":false},{"type":"point","x":150,"y":-75,"move":false},{"type":"point","x":100,"y":-50,"move":false},{"type":"close"},{"type":"fill","r":200,"g":200,"b":200},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-150,"y":-100,"move":true},{"type":"point","x":-125,"y":0,"move":false},{"type":"point","x":-100,"y":-75,"move":false},{"type":"point","x":-75,"y":-25,"move":false},{"type":"point","x":-75,"y":-125,"move":false},{"type":"point","x":-50,"y":-25,"move":true},{"type":"point","x":50,"y":-75,"move":false},{"type":"point","x":0,"y":-50,"move":false},{"type":"point","x":0,"y":-150,"move":false},{"type":"point","x":-50,"y":-125,"move":true},{"type":"point","x":50,"y":-175,"move":false},{"type":"point","x":75,"y":-75,"move":true},{"type":"point","x":75,"y":-175,"move":false},{"type":"point","x":150,"y":-100,"move":false},{"type":"point","x":150,"y":-200,"move":false},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), jackpot: JSON.parse(
            `[{"type":"point","x":-250,"y":-125,"move":false},{"type":"point","x":-200,"y":-175,"move":false},{"type":"point","x":200,"y":-175,"move":false},{"type":"point","x":250,"y":-125,"move":false},{"type":"point","x":250,"y":125,"move":false},{"type":"point","x":200,"y":175,"move":false},{"type":"point","x":-200,"y":175,"move":false},{"type":"point","x":-250,"y":125,"move":false},{"type":"close"},{"type":"point","x":-200,"y":-100,"move":true},{"type":"point","x":-75,"y":-100,"move":false},{"type":"point","x":-150,"y":100,"move":false},{"type":"point","x":75,"y":-100,"move":true},{"type":"point","x":200,"y":-100,"move":false},{"type":"point","x":125,"y":100,"move":false},{"type":"point","x":-75,"y":-125,"move":true},{"type":"point","x":75,"y":-125,"move":false},{"type":"point","x":-25,"y":125,"move":false},{"type":"fill","r":175,"g":175,"b":50},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-212.5,"y":-125,"move":false},{"type":"point","x":-87.5,"y":-125,"move":false},{"type":"point","x":-87.5,"y":-150,"move":false},{"type":"point","x":100,"y":-150,"move":false},{"type":"point","x":100,"y":-125,"move":false},{"type":"point","x":225,"y":-125,"move":false},{"type":"point","x":225,"y":125,"move":false},{"type":"point","x":100,"y":125,"move":false},{"type":"point","x":100,"y":150,"move":false},{"type":"point","x":-87.5,"y":150,"move":false},{"type":"point","x":-87.5,"y":125,"move":false},{"type":"point","x":-212.5,"y":125,"move":false},{"type":"close"},{"type":"fill","r":170,"g":175,"b":175},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-62.5,"y":-125,"move":false},{"type":"point","x":75,"y":-125,"move":false},{"type":"point","x":75,"y":-87.5,"move":false},{"type":"point","x":0,"y":125,"move":false},{"type":"point","x":-37.5,"y":125,"move":false},{"type":"point","x":37.5,"y":-87.5,"move":false},{"type":"point","x":-62.5,"y":-87.5,"move":false},{"type":"close"},{"type":"point","x":-75,"y":-100,"move":true},{"type":"point","x":-75,"y":-62.5,"move":false},{"type":"point","x":-125,"y":100,"move":false},{"type":"point","x":-162.5,"y":100,"move":false},{"type":"point","x":-112.5,"y":-62.5,"move":false},{"type":"point","x":-187.5,"y":-62.5,"move":false},{"type":"point","x":-187.5,"y":-100,"move":false},{"type":"close"},{"type":"point","x":87.5,"y":-100,"move":true},{"type":"point","x":200,"y":-100,"move":false},{"type":"point","x":200,"y":-62.5,"move":false},{"type":"point","x":150,"y":100,"move":false},{"type":"point","x":112.5,"y":100,"move":false},{"type":"point","x":162.5,"y":-62.5,"move":false},{"type":"point","x":87.5,"y":-62.5,"move":false},{"type":"close"},{"type":"fill","r":255,"g":50,"b":50},{"type":"stroke","r":100,"g":50,"b":50}]`
        ), onSpawn(rarity,bullet) {
            if (random() < 0.025 + 0.005*rarity) {
                bullet.damage *= 30 + 2.5*rarity;
                bullet.size *= 2.2;
                bullet.jackpot = true;
            }
        }, onHit(rarity,bullet,enemy) {
            if (bullet.jackpot) effects.push(new Effect(bullet.x,bullet.y,this.jackpot,40,40)); 
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
            stats.health += 3 + 1*rarity;
            stats.healthMax += 3 + 1*rarity;
        }
/*SW*/},{
        name: "Saw",
        desc: "Reduced accuracy, increased damage",
        drawPath: JSON.parse(
            `[{"type":"point","x":-150,"y":-50},{"type":"point","x":200,"y":-200},{"type":"point","x":225,"y":-125},{"type":"point","x":175,"y":-150},{"type":"point","x":175,"y":-100},{"type":"point","x":125,"y":-125},{"type":"point","x":125,"y":-75},{"type":"point","x":75,"y":-100},{"type":"point","x":75,"y":-50},{"type":"point","x":25,"y":-75},{"type":"point","x":25,"y":-25},{"type":"point","x":-25,"y":-50},{"type":"point","x":-25,"y":0},{"type":"point","x":-75,"y":-25},{"type":"point","x":-75,"y":25},{"type":"point","x":-100,"y":50},{"type":"fill","r":175,"g":175,"b":175},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-150,"y":-50},{"type":"point","x":-100,"y":50},{"type":"point","x":-100,"y":75},{"type":"point","x":-200,"y":125},{"type":"point","x":-250,"y":0},{"type":"close"},{"type":"point","x":-175,"y":0,"move":true},{"type":"point","x":-212.5,"y":12.5,"move":false},{"type":"point","x":-187.5,"y":75,"move":false},{"type":"point","x":-137.5,"y":62.5,"move":false},{"type":"point","x":-125,"y":50,"move":false},{"type":"close"},{"type":"fill","r":125,"g":100,"b":50},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), statChange(rarity) {
            stats.bloom *= 2.5-0.08*rarity;
            stats.damage *= 1.45 + 0.1*rarity;
        }
/*BS*/},{
        name: "Blue Scale",
        desc: "Chance to gain blue health when you lose red health",
        drawPath: JSON.parse(
            `[{"type":"point","x":-250,"y":0},{"type":"point","x":-150,"y":25},{"type":"point","x":-100,"y":50},{"type":"point","x":-50,"y":100},{"type":"point","x":-25,"y":150},{"type":"point","x":0,"y":250},{"type":"point","x":125,"y":125},{"type":"point","x":200,"y":0},{"type":"point","x":225,"y":-150},{"type":"point","x":225,"y":-225},{"type":"point","x":150,"y":-225},{"type":"point","x":0,"y":-200},{"type":"point","x":-125,"y":-125},{"type":"close"},{"type":"fill","r":40,"g":115,"b":170},{"type":"stroke","r":50,"g":75,"b":75},{"type":"point","x":-200,"y":-12.5},{"type":"point","x":-125,"y":0},{"type":"point","x":-50,"y":50},{"type":"point","x":0,"y":125},{"type":"point","x":0,"y":200},{"type":"point","x":150,"y":25},{"type":"point","x":200,"y":-125},{"type":"point","x":200,"y":-200},{"type":"point","x":125,"y":-200},{"type":"point","x":-25,"y":-150},{"type":"close"},{"type":"fill","r":45,"g":140,"b":175}]`
        ), onPlayerHit(rarity, enemy, blue, red) {
            if (random() < (0.15 + rarity*0.08) && red && stats.extraHealth < stats.extraHealthMax) stats.extraHealth++;
        }
/*SW*/},{
        name: "Stopwatch",
        desc: "increased I-Frame length when taking damage",
        drawPath: JSON.parse(
            `[{"type":"point","x":75,"y":-150},{"type":"point","x":125,"y":-250},{"type":"point","x":175,"y":-225},{"type":"point","x":125,"y":-125},{"type":"fill","r":150,"g":150,"b":50},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":0,"y":-225},{"type":"point","x":162.5,"y":-162.5},{"type":"point","x":225,"y":0},{"type":"point","x":162.5,"y":162.5},{"type":"point","x":0,"y":225},{"type":"point","x":-162.5,"y":162.5},{"type":"point","x":-225,"y":0},{"type":"point","x":-162.5,"y":-162.5},{"type":"close"},{"type":"fill","r":150,"g":150,"b":75},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":50,"y":-162.5},{"type":"point","x":0,"y":-12.5},{"type":"point","x":50,"y":100},{"type":"stroke","r":20,"g":20,"b":20}]`
        ), statChange(rarity) {
            stats.extraIframes = (stats.extraIframes || 0) + 120 + 30*rarity;
        }
/*SH*/},{
        name: "Shadow",
        desc: "Added bursts, reduced firerate",
        drawPath: JSON.parse(
            `[{"type":"point","x":-75,"y":-175,"move":false},{"type":"point","x":0,"y":-200,"move":false},{"type":"point","x":25,"y":-200,"move":false},{"type":"point","x":25,"y":-175,"move":false},{"type":"point","x":0,"y":-100,"move":false},{"type":"point","x":-25,"y":-75,"move":false},{"type":"point","x":-25,"y":-125,"move":false},{"type":"point","x":-50,"y":-150,"move":false},{"type":"point","x":-100,"y":-150,"move":false},{"type":"close"},{"type":"point","x":-225,"y":-25,"move":true},{"type":"point","x":-175,"y":-25,"move":false},{"type":"point","x":-150,"y":0,"move":false},{"type":"point","x":-150,"y":50,"move":false},{"type":"point","x":-200,"y":50,"move":false},{"type":"point","x":-225,"y":25,"move":false},{"type":"close"},{"type":"fill","r":75,"g":75,"b":75},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-225,"y":-25,"move":false},{"type":"point","x":-100,"y":-150,"move":false},{"type":"point","x":-50,"y":-150,"move":false},{"type":"point","x":-25,"y":-125,"move":false},{"type":"point","x":-25,"y":-75,"move":false},{"type":"point","x":-150,"y":50,"move":false},{"type":"point","x":-150,"y":0,"move":false},{"type":"point","x":-175,"y":-25,"move":false},{"type":"close"},{"type":"fill","r":100,"g":100,"b":100},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-50,"y":150,"move":false},{"type":"point","x":-50,"y":200,"move":false},{"type":"point","x":-25,"y":225,"move":false},{"type":"point","x":25,"y":225,"move":false},{"type":"point","x":175,"y":75,"move":false},{"type":"point","x":200,"y":0,"move":false},{"type":"point","x":200,"y":-25,"move":false},{"type":"point","x":175,"y":-25,"move":false},{"type":"point","x":100,"y":0,"move":false},{"type":"close"},{"type":"fill","r":25,"g":25,"b":25},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), statChange(rarity) {
            stats.firerate *= 1 + 0.25 * (1 + rarity) / stats.bursts;
            stats.bursts += 1 + rarity;
        }
/*TR*/},{
        name: "Trident",
        desc: "Increased projectile count, reduced damage",
        drawPath: JSON.parse(
            `[{"type":"point","x":-25,"y":250},{"type":"point","x":-25,"y":25},{"type":"point","x":-150,"y":75},{"type":"point","x":-150,"y":-100},{"type":"point","x":-125,"y":-200},{"type":"point","x":-100,"y":-100},{"type":"point","x":-100,"y":0},{"type":"point","x":-25,"y":-25},{"type":"point","x":-25,"y":-150},{"type":"point","x":0,"y":-250},{"type":"point","x":25,"y":-150},{"type":"point","x":25,"y":-25},{"type":"point","x":100,"y":0},{"type":"point","x":100,"y":-100},{"type":"point","x":125,"y":-200},{"type":"point","x":150,"y":-100},{"type":"point","x":150,"y":75},{"type":"point","x":25,"y":25},{"type":"point","x":25,"y":250},{"type":"fill","r":100,"g":145,"b":175},{"type":"stroke","r":50,"g":75,"b":100}]`
        ), statChange(rarity) {
            stats.damage *= 1 - 0.25 * (1 + rarity) / stats.projectiles;
            stats.projectiles += 1 + rarity;
        }
/*CB*/},{
        name: "Crowbar",
        desc: "Increased damage to enemies above 75% health",
        drawPath: JSON.parse(
            `[{"type":"point","x":-250,"y":225},{"type":"point","x":-200,"y":175},{"type":"point","x":75,"y":-200},{"type":"point","x":125,"y":-225},{"type":"point","x":150,"y":-225},{"type":"point","x":187.5,"y":-200},{"type":"point","x":200,"y":-150},{"type":"point","x":187.5,"y":-125},{"type":"point","x":175,"y":-175},{"type":"point","x":150,"y":-187.5},{"type":"point","x":112.5,"y":-175},{"type":"point","x":-175,"y":200},{"type":"close"},{"type":"fill","r":255,"g":75,"b":75},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), damageBoost(rarity,bullet,enemy) {
            if (enemy.health/enemy.healthMax > 0.75) return 1.75 + 0.2*rarity;
            else return 1;
        }
/*GU*/},{
        name: "Guillotine",
        desc: "Increased damage to enemies below 50% health",
        drawPath: JSON.parse(
            `[{"type":"point","x":-150,"y":250},{"type":"point","x":-150,"y":-250},{"type":"point","x":-125,"y":-250},{"type":"point","x":-125,"y":-225},{"type":"point","x":125,"y":-225},{"type":"point","x":125,"y":-250},{"type":"point","x":150,"y":-250},{"type":"point","x":150,"y":250},{"type":"point","x":125,"y":250},{"type":"point","x":125,"y":225},{"type":"point","x":-125,"y":225},{"type":"point","x":-125,"y":250},{"type":"point","x":-125,"y":125,"move":true},{"type":"point","x":-50,"y":125,"move":false},{"type":"point","x":-25,"y":150,"move":false},{"type":"point","x":25,"y":150,"move":false},{"type":"point","x":50,"y":125,"move":false},{"type":"point","x":125,"y":125,"move":false},{"type":"point","x":125,"y":-200,"move":false},{"type":"point","x":-125,"y":-200,"move":false},{"type":"close"},{"type":"fill","r":150,"g":100,"b":75},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-125,"y":-200,"move":false},{"type":"point","x":-125,"y":-100,"move":false},{"type":"point","x":50,"y":-125,"move":false},{"type":"point","x":100,"y":-150,"move":false},{"type":"point","x":125,"y":-175,"move":false},{"type":"point","x":125,"y":-200,"move":false},{"type":"close"},{"type":"fill","r":200,"g":200,"b":200},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), damageBoost(rarity,bullet,enemy) {
            if (enemy.health/enemy.healthMax < 0.5) return 1.5 + 0.15*rarity;
            else return 1;
        }
/*BH*/},{
        name: "Bull's Horn",
        desc: "Increased damage at or below half health",
        drawPath: JSON.parse(
            `[{"type":"point","x":-175,"y":100},{"type":"point","x":-125,"y":100},{"type":"point","x":-100,"y":125},{"type":"point","x":-100,"y":175},{"type":"point","x":-150,"y":175},{"type":"point","x":-175,"y":150},{"type":"point","x":-175,"y":100},{"type":"point","x":-75,"y":0},{"type":"point","x":-25,"y":-75},{"type":"point","x":-12.5,"y":-150},{"type":"point","x":-25,"y":-200},{"type":"point","x":-50,"y":-225},{"type":"point","x":0,"y":-212.5},{"type":"point","x":25,"y":-175},{"type":"point","x":50,"y":-75},{"type":"point","x":37.5,"y":-25},{"type":"point","x":0,"y":50},{"type":"point","x":-100,"y":175},{"type":"fill","r":135,"g":100,"b":100},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-150,"y":175},{"type":"point","x":-100,"y":175},{"type":"point","x":-100,"y":125},{"type":"point","x":-125,"y":100},{"type":"point","x":-175,"y":100},{"type":"point","x":-175,"y":150},{"type":"close"},{"type":"fill","r":25,"g":25,"b":25},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), damageBoost(rarity,bullet,enemy) {
            if (stats.health <= stats.healthMax/2) return 2 + 0.25*rarity;
            else return 1;
        }
/*SG*/},{
        name: "Stun Gun",
        desc: "Bullets deal extra flat damage",
        drawPath: JSON.parse(
            `[{"type":"point","x":-250,"y":-150,"move":false},{"type":"point","x":-175,"y":-175,"move":false},{"type":"point","x":200,"y":-50,"move":false},{"type":"point","x":200,"y":100,"move":false},{"type":"point","x":125,"y":125,"move":false},{"type":"point","x":125,"y":-25,"move":false},{"type":"point","x":-250,"y":-150,"move":false},{"type":"point","x":-250,"y":0,"move":false},{"type":"point","x":125,"y":125,"move":false},{"type":"point","x":125,"y":-25,"move":false},{"type":"fill","r":75,"g":75,"b":75},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":125,"y":-25,"move":false},{"type":"point","x":200,"y":-50,"move":false},{"type":"point","x":200,"y":100,"move":false},{"type":"point","x":125,"y":125,"move":false},{"type":"close"},{"type":"point","x":-100,"y":50,"move":true},{"type":"point","x":-100,"y":200,"move":false},{"type":"point","x":-175,"y":175,"move":false},{"type":"point","x":-175,"y":25,"move":false},{"type":"point","x":-100,"y":50,"move":false},{"type":"point","x":-25,"y":75,"move":false},{"type":"point","x":-25,"y":175,"move":false},{"type":"point","x":-100,"y":200,"move":false},{"type":"fill","r":20,"g":20,"b":20},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-200,"y":-62.5,"move":false},{"type":"point","x":-75,"y":25,"move":false},{"type":"point","x":-75,"y":-50,"move":false},{"type":"point","x":75,"y":37.5,"move":false},{"type":"fill","r":150,"g":150,"b":0},{"type":"stroke","r":175,"g":175,"b":50}]`
        ), onHit(rarity,bullet,enemy) {
            //const velChange = Math.max(0,1-(0.3-0.05*rarity)*bullet.damage/enemy.health*50);
            //enemy.vx *= velChange;
            //enemy.vy *= velChange;
            enemy.health -= 0.15 + 0.025*rarity;
            if (game.showDamageNumbers) dmgNumbers.push(new DamageNumber(bullet.x,bullet.y,0.1 + 0.025*rarity));
        }
/*SB*/},{
        name: "Silver Bullet",
        desc: "Chance to crit damage",
        drawPath: JSON.parse(
            `[{"type":"point","x":-25,"y":250},{"type":"point","x":-75,"y":225},{"type":"point","x":-75,"y":-100},{"type":"point","x":-50,"y":-200},{"type":"point","x":0,"y":-250},{"type":"point","x":50,"y":-200},{"type":"point","x":75,"y":-100},{"type":"point","x":75,"y":225},{"type":"point","x":25,"y":250},{"type":"point","x":-25,"y":250},{"type":"point","x":75,"y":-100,"move":true},{"type":"point","x":0,"y":-87.5,"move":false},{"type":"point","x":-75,"y":-100,"move":false},{"type":"fill","r":200,"g":200,"b":200},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":75,"y":-225,"move":false},{"type":"point","x":50,"y":-125,"move":false},{"type":"point","x":-50,"y":-100,"move":false},{"type":"point","x":50,"y":-75,"move":false},{"type":"point","x":75,"y":25,"move":false},{"type":"point","x":100,"y":-75,"move":false},{"type":"point","x":200,"y":-100,"move":false},{"type":"point","x":100,"y":-125,"move":false},{"type":"close"},{"type":"fill","r":255,"g":255,"b":255},{"type":"stroke","r":200,"g":200,"b":200}]`
        ), silver: JSON.parse(
            `[{"type":"point","x":-250,"y":-250},{"type":"point","x":-100,"y":0},{"type":"point","x":-250,"y":250},{"type":"point","x":0,"y":100},{"type":"point","x":250,"y":250},{"type":"point","x":100,"y":0},{"type":"point","x":250,"y":-250},{"type":"point","x":0,"y":-100},{"type":"close"},{"type":"fill","r":175,"g":175,"b":175},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), damageBoost(rarity,bullet,enemy) {
            if (random() < 0.25) {
                effects.push(new Effect(bullet.x,bullet.y,this.silver,20,20));
                return 2 + 0.25*rarity;
            } else return 1;
        }
/*DB*/},{
        name: "Demonic Bracelet",
        desc: "Increased Damage, reduced max health",
        drawPath: JSON.parse(
            `[{"type":"point","x":-50,"y":-150},{"type":"point","x":50,"y":-150},{"type":"point","x":150,"y":-125},{"type":"point","x":200,"y":-75},{"type":"point","x":225,"y":-25},{"type":"point","x":225,"y":0},{"type":"point","x":200,"y":50},{"type":"point","x":150,"y":100},{"type":"point","x":50,"y":125},{"type":"point","x":-50,"y":125},{"type":"point","x":-150,"y":100},{"type":"point","x":-200,"y":50},{"type":"point","x":-225,"y":0},{"type":"point","x":-225,"y":-25},{"type":"point","x":-200,"y":-75},{"type":"point","x":-150,"y":-125},{"type":"close"},{"type":"point","x":-100,"y":-100,"move":true},{"type":"point","x":-137.5,"y":-75,"move":false},{"type":"point","x":-175,"y":-50,"move":false},{"type":"point","x":-187.5,"y":-12.5,"move":false},{"type":"point","x":-175,"y":25,"move":false},{"type":"point","x":-100,"y":75,"move":false},{"type":"point","x":0,"y":87.5,"move":false},{"type":"point","x":100,"y":75,"move":false},{"type":"point","x":175,"y":25,"move":false},{"type":"point","x":187.5,"y":-12.5,"move":false},{"type":"point","x":175,"y":-50,"move":false},{"type":"point","x":100,"y":-100,"move":false},{"type":"point","x":0,"y":-112.5,"move":false},{"type":"close"},{"type":"point","x":-175,"y":-100,"move":true},{"type":"point","x":-175,"y":-175,"move":false},{"type":"point","x":-125,"y":-125,"move":false},{"type":"point","x":125,"y":-125,"move":true},{"type":"point","x":175,"y":-175,"move":false},{"type":"point","x":175,"y":-100,"move":false},{"type":"fill","r":255,"g":50,"b":50},{"type":"stroke","r":50,"g":0,"b":0}]`
        ), statChange(rarity) {
            stats.damage *= 1.4 + 0.1*rarity;
            stats.health -= 4;
            stats.healthMax -= 4;
        }
/*HP*/},{
        name: "Hollow Point",
        desc: "Increased damage up-close",
        drawPath: JSON.parse(
            `[{"type":"point","x":-25,"y":250},{"type":"point","x":-75,"y":225},{"type":"point","x":-100,"y":200},{"type":"point","x":-100,"y":-100},{"type":"point","x":-75,"y":-200},{"type":"point","x":0,"y":-250},{"type":"point","x":75,"y":-200},{"type":"point","x":100,"y":-100},{"type":"point","x":100,"y":200},{"type":"point","x":75,"y":225},{"type":"point","x":25,"y":250},{"type":"close"},{"type":"fill","r":100,"g":100,"b":100},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":100,"y":-100,"move":true},{"type":"point","x":75,"y":-125,"move":false},{"type":"point","x":25,"y":-150,"move":false},{"type":"point","x":-25,"y":-150,"move":false},{"type":"point","x":-75,"y":-125,"move":false},{"type":"point","x":-100,"y":-100,"move":false},{"type":"fill","r":100,"g":100,"b":100},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":100,"y":200,"move":false},{"type":"point","x":75,"y":225,"move":false},{"type":"point","x":25,"y":250,"move":false},{"type":"point","x":-25,"y":250,"move":false},{"type":"point","x":-75,"y":225,"move":false},{"type":"point","x":-100,"y":200,"move":false},{"type":"point","x":-75,"y":175,"move":false},{"type":"point","x":-25,"y":150,"move":false},{"type":"point","x":25,"y":150,"move":false},{"type":"point","x":75,"y":175,"move":false},{"type":"close"},{"type":"fill","r":150,"g":150,"b":150},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), damageBoost(rarity,bullet,enemy) {
            if (Math.hypot(player.x-bullet.x,player.y-bullet.y) < 300) return 1.55 + 0.15*rarity;
            else return 1;
        }
/*RP*/},{
        name: "Red Pen",
        desc: "Increased damage the more red health you have",
        drawPath: JSON.parse(
            `[{"type":"point","x":-200,"y":-175},{"type":"point","x":-125,"y":-100},{"type":"point","x":-100,"y":-125},{"type":"point","x":-175,"y":-200},{"type":"close"},{"type":"point","x":-200,"y":-150,"move":false},{"type":"point","x":-150,"y":-100,"move":true},{"type":"point","x":-200,"y":-150,"move":false},{"type":"point","x":125,"y":150,"move":true},{"type":"point","x":200,"y":200,"move":false},{"type":"point","x":150,"y":125,"move":false},{"type":"close"},{"type":"fill","r":100,"g":100,"b":100},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-125,"y":-100,"move":false},{"type":"point","x":125,"y":150,"move":false},{"type":"point","x":150,"y":125,"move":false},{"type":"point","x":-100,"y":-125,"move":false},{"type":"point","x":-125,"y":-100,"move":false},{"type":"fill","r":255,"g":50,"b":50},{"type":"stroke","r":80,"g":40,"b":40}]`
        ), damageBoost(rarity,bullet,enemy) {
            return 1 + stats.health*(0.03 + 0.015 * rarity);
        }
/*SP*/},{
        name: "Spectacles",
        desc: "First shot in each room has MASSIVE damage",
        drawPath: JSON.parse(
            `[{"type":"point","x":-250,"y":-50},{"type":"point","x":-100,"y":100},{"type":"point","x":200,"y":-50},{"type":"point","x":50,"y":-200},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":50,"y":25,"move":false},{"type":"point","x":-100,"y":100,"move":false},{"type":"point","x":-100,"y":150,"move":false},{"type":"point","x":-75,"y":175,"move":false},{"type":"point","x":-50,"y":175,"move":false},{"type":"point","x":25,"y":137.5,"move":false},{"type":"point","x":50,"y":100,"move":false},{"type":"point","x":50,"y":25,"move":false},{"type":"point","x":200,"y":-50,"move":false},{"type":"point","x":200,"y":25,"move":false},{"type":"point","x":175,"y":62.5,"move":false},{"type":"point","x":100,"y":100,"move":false},{"type":"point","x":75,"y":100,"move":false},{"type":"point","x":50,"y":75,"move":false},{"type":"point","x":50,"y":25,"move":false},{"type":"fill","r":200,"g":75,"b":75},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), glasses: JSON.parse(
            `[{"type":"point","x":-250,"y":0},{"type":"point","x":-225,"y":-225},{"type":"point","x":0,"y":-250},{"type":"point","x":225,"y":-225},{"type":"point","x":250,"y":0},{"type":"point","x":225,"y":225},{"type":"point","x":0,"y":250},{"type":"point","x":-225,"y":225},{"type":"close"},{"type":"fill","r":255,"g":0,"b":0},{"type":"stroke","r":100,"g":50,"b":50}]`
        ), statChange(rarity) {
            stats.spectacleScale = (stats.spectacleScale || 0) + 15 + 4*rarity;
            stats.spectacleAmount = (stats.spectacleAmount || 0) + 1;
        }, onSpawn(rarity,bullet) {
            if (bullet.firstBullet) {
                bullet.firstBullet = false;
                effects.push(new Effect(bullet.x,bullet.y,this.glasses,50,30));
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
        ), brokenglass: JSON.parse(
            `[{"type":"point","x":-237.5,"y":-225},{"type":"point","x":-125,"y":-175},{"type":"point","x":-175,"y":-225},{"type":"close"},{"type":"point","x":-87.5,"y":-250,"move":true},{"type":"point","x":-37.5,"y":-162.5,"move":false},{"type":"point","x":-25,"y":-237.5,"move":false},{"type":"close"},{"type":"point","x":62.5,"y":-250,"move":true},{"type":"point","x":75,"y":-150,"move":false},{"type":"point","x":125,"y":-187.5,"move":false},{"type":"close"},{"type":"point","x":250,"y":-187.5,"move":true},{"type":"point","x":112.5,"y":-125,"move":false},{"type":"point","x":175,"y":-112.5,"move":false},{"type":"close"},{"type":"point","x":237.5,"y":-87.5,"move":true},{"type":"point","x":125,"y":-50,"move":false},{"type":"point","x":225,"y":-12.5,"move":false},{"type":"close"},{"type":"point","x":237.5,"y":125,"move":true},{"type":"point","x":125,"y":75,"move":false},{"type":"point","x":225,"y":37.5,"move":false},{"type":"close"},{"type":"point","x":237.5,"y":212.5,"move":true},{"type":"point","x":125,"y":125,"move":false},{"type":"point","x":175,"y":225,"move":false},{"type":"close"},{"type":"point","x":112.5,"y":225,"move":true},{"type":"point","x":50,"y":87.5,"move":false},{"type":"point","x":62.5,"y":212.5,"move":false},{"type":"close"},{"type":"point","x":-137.5,"y":237.5,"move":true},{"type":"point","x":-75,"y":137.5,"move":false},{"type":"point","x":-175,"y":200,"move":false},{"type":"close"},{"type":"point","x":-37.5,"y":225,"move":true},{"type":"point","x":0,"y":100,"move":false},{"type":"point","x":25,"y":225,"move":false},{"type":"close"},{"type":"point","x":-225,"y":137.5,"move":true},{"type":"point","x":-112.5,"y":87.5,"move":false},{"type":"point","x":-250,"y":100,"move":false},{"type":"close"},{"type":"point","x":-250,"y":12.5,"move":true},{"type":"point","x":-125,"y":50,"move":false},{"type":"point","x":-250,"y":-37.5,"move":false},{"type":"close"},{"type":"point","x":-250,"y":-62.5,"move":true},{"type":"point","x":-125,"y":-25,"move":false},{"type":"point","x":-212.5,"y":-87.5,"move":false},{"type":"close"},{"type":"point","x":-212.5,"y":-125,"move":true},{"type":"point","x":-137.5,"y":-75,"move":false},{"type":"point","x":-212.5,"y":-187.5,"move":false},{"type":"close"},{"type":"fill","r":175,"g":175,"b":175},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), statChange(rarity) {
            stats.damage *= 1.35 + 0.1*rarity;
        }, onPlayerHit(rarity, enemy) {
            if (random() < 0.1 - 0.01*rarity) {
                let index = -1;
                game.relicsEquipped.forEach((item,i) => { if (item.reference) if (item.reference.name == "Broken Glass") index = i });
                if (index != -1) {
                    game.relicsEquipped[index] = false;
                    effects.push(new Effect(player.x,player.y,this.brokenglass,75,45));
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
            bullets.push(new Bullet({x: bullet.x, y: bullet.y, speed: 20+rarity*5, direction: bullet.direction, size: 50+stats.bulletSize*(1+0.25*rarity), damage: bullet.damage * (0.3 + 0.08*rarity), lifetime: 0.2, drawPath: this.flashPath, wallPierce: true, pierce: 10,drawAlpha:0.4}));
        }
/*GH*/},{
        name: "Giant's Helmet",
        desc: "Lots more red health, increased player size",
        drawPath: JSON.parse(
            `[{"type":"point","x":-250,"y":200},{"type":"point","x":-175,"y":150},{"type":"point","x":0,"y":100},{"type":"point","x":175,"y":150},{"type":"point","x":250,"y":200},{"type":"point","x":200,"y":-125},{"type":"point","x":-200,"y":-125},{"type":"close"},{"type":"fill","r":25,"g":20,"b":20},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-175,"y":225},{"type":"point","x":-250,"y":200},{"type":"point","x":-250,"y":-175},{"type":"point","x":-175,"y":-225},{"type":"point","x":-50,"y":-250},{"type":"point","x":50,"y":-250},{"type":"point","x":175,"y":-225},{"type":"point","x":250,"y":-175},{"type":"point","x":250,"y":200},{"type":"point","x":175,"y":225},{"type":"point","x":175,"y":-50},{"type":"point","x":100,"y":-75},{"type":"point","x":50,"y":-50},{"type":"point","x":50,"y":112.5},{"type":"point","x":0,"y":125},{"type":"point","x":-50,"y":112.5},{"type":"point","x":-50,"y":-50},{"type":"point","x":-100,"y":-75},{"type":"point","x":-175,"y":-50},{"type":"close"},{"type":"fill","r":75,"g":75,"b":75},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), statChange(rarity) {
            stats.playerSize *= 1.5
            stats.health += 6 + 3*rarity;
            stats.healthMax += 6 + 3*rarity;
        }
/*4L*/},{
        name: "4 Leaf Clover",
        desc: "Chance to reduce damage taken",
        drawPath: JSON.parse(
            `[{"type":"point","x":0,"y":-100},{"type":"point","x":-25,"y":-175},{"type":"point","x":-100,"y":-225},{"type":"point","x":-175,"y":-225},{"type":"point","x":-225,"y":-175},{"type":"point","x":-225,"y":-100},{"type":"point","x":-175,"y":-25},{"type":"point","x":-100,"y":0},{"type":"point","x":-175,"y":25},{"type":"point","x":-225,"y":100},{"type":"point","x":-225,"y":175},{"type":"point","x":-175,"y":225},{"type":"point","x":-100,"y":225},{"type":"point","x":-25,"y":175},{"type":"point","x":0,"y":100},{"type":"point","x":25,"y":175},{"type":"point","x":100,"y":225},{"type":"point","x":175,"y":225},{"type":"point","x":225,"y":175},{"type":"point","x":225,"y":100},{"type":"point","x":175,"y":25},{"type":"point","x":100,"y":0},{"type":"point","x":175,"y":-25},{"type":"point","x":225,"y":-100},{"type":"point","x":225,"y":-175},{"type":"point","x":175,"y":-225},{"type":"point","x":100,"y":-225},{"type":"point","x":25,"y":-175},{"type":"close"},{"type":"point","x":-25,"y":175,"move":true},{"type":"point","x":0,"y":100,"move":false},{"type":"point","x":25,"y":175,"move":false},{"type":"point","x":25,"y":212.5,"move":false},{"type":"point","x":-12.5,"y":287.5,"move":false},{"type":"point","x":-62.5,"y":287.5,"move":false},{"type":"point","x":-25,"y":200,"move":false},{"type":"close"},{"type":"fill","r":0,"g":100,"b":0},{"type":"stroke","r":0,"g":50,"b":0}]`
        ), clover: JSON.parse(
            `[{"type":"point","x":0,"y":-100},{"type":"point","x":-25,"y":-175},{"type":"point","x":-100,"y":-225},{"type":"point","x":-175,"y":-225},{"type":"point","x":-225,"y":-175},{"type":"point","x":-225,"y":-100},{"type":"point","x":-175,"y":-25},{"type":"point","x":-100,"y":0},{"type":"point","x":-175,"y":25},{"type":"point","x":-225,"y":100},{"type":"point","x":-225,"y":175},{"type":"point","x":-175,"y":225},{"type":"point","x":-100,"y":225},{"type":"point","x":-25,"y":175},{"type":"point","x":0,"y":100},{"type":"point","x":25,"y":175},{"type":"point","x":100,"y":225},{"type":"point","x":175,"y":225},{"type":"point","x":225,"y":175},{"type":"point","x":225,"y":100},{"type":"point","x":175,"y":25},{"type":"point","x":100,"y":0},{"type":"point","x":175,"y":-25},{"type":"point","x":225,"y":-100},{"type":"point","x":225,"y":-175},{"type":"point","x":175,"y":-225},{"type":"point","x":100,"y":-225},{"type":"point","x":25,"y":-175},{"type":"close"},{"type":"fill","r":0,"g":100,"b":0},{"type":"stroke","r":0,"g":50,"b":0}]`
        ), onPlayerHit(rarity, enemy,blue,red) {
            if (random() < 0.1 + 0.025*rarity && stats.extraHealth < stats.extraHealthMax ) {
                if (blue && stats.extraHealth < stats.extraHealthMax) stats.extraHealth++;
                else if (red && stats.health < stats.healthMax) stats.health++;

                effects.push(new Effect(player.x,player.y,this.clover,40,60,Math.PI/4))
            }
        }
/*OD*/},{
        name: "Odometer",
        desc: "Bullets deal more damage the further they travel",
        drawPath: JSON.parse(
            `[{"type":"point","x":-237.5,"y":-75,"move":false},{"type":"point","x":-237.5,"y":75,"move":false},{"type":"point","x":237.5,"y":75,"move":false},{"type":"point","x":237.5,"y":-75,"move":false},{"type":"close"},{"type":"fill","r":30,"g":30,"b":30},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-187.5,"y":-50,"move":false},{"type":"point","x":-212.5,"y":-25,"move":false},{"type":"point","x":-212.5,"y":25,"move":false},{"type":"point","x":-187.5,"y":50,"move":false},{"type":"point","x":-162.5,"y":25,"move":false},{"type":"point","x":-162.5,"y":-25,"move":false},{"type":"close"},{"type":"point","x":-112.5,"y":-50,"move":true},{"type":"point","x":-137.5,"y":-25,"move":false},{"type":"point","x":-137.5,"y":25,"move":false},{"type":"point","x":-112.5,"y":50,"move":false},{"type":"point","x":-87.5,"y":25,"move":false},{"type":"point","x":-87.5,"y":-25,"move":false},{"type":"close"},{"type":"point","x":-37.5,"y":-50,"move":true},{"type":"point","x":-62.5,"y":-25,"move":false},{"type":"point","x":-62.5,"y":25,"move":false},{"type":"point","x":-37.5,"y":50,"move":false},{"type":"point","x":-12.5,"y":25,"move":false},{"type":"point","x":-12.5,"y":-25,"move":false},{"type":"close"},{"type":"point","x":12.5,"y":-25,"move":true},{"type":"point","x":37.5,"y":-50,"move":false},{"type":"point","x":62.5,"y":-25,"move":false},{"type":"point","x":12.5,"y":25,"move":false},{"type":"point","x":37.5,"y":50,"move":false},{"type":"point","x":62.5,"y":25,"move":false},{"type":"point","x":87.5,"y":-25,"move":true},{"type":"point","x":112.5,"y":-50,"move":false},{"type":"point","x":137.5,"y":-25,"move":false},{"type":"point","x":112.5,"y":0,"move":false},{"type":"point","x":137.5,"y":25,"move":false},{"type":"point","x":112.5,"y":50,"move":false},{"type":"point","x":87.5,"y":25,"move":false},{"type":"point","x":212.5,"y":-25,"move":true},{"type":"point","x":187.5,"y":-50,"move":false},{"type":"point","x":162.5,"y":-25,"move":false},{"type":"point","x":162.5,"y":25,"move":false},{"type":"point","x":187.5,"y":50,"move":false},{"type":"point","x":212.5,"y":25,"move":false},{"type":"point","x":187.5,"y":0,"move":false},{"type":"point","x":162.5,"y":25,"move":false},{"type":"stroke","r":150,"g":150,"b":150}]`
        ), damageBoost(rarity, bullet, enemy) {
            return 1 + bullet.distance * (0.00060 + 0.0002 * rarity);
        }
/*CT*/},{
        name: "Crown of Thorns",
        desc: "Shoot out a wave of projectiles when you get hit",
        drawPath: JSON.parse(
            `[{"type":"point","x":0,"y":-100},{"type":"point","x":-150,"y":-75},{"type":"point","x":-200,"y":-50},{"type":"point","x":-225,"y":0},{"type":"point","x":-200,"y":50},{"type":"point","x":-150,"y":75},{"type":"point","x":0,"y":100},{"type":"point","x":150,"y":75},{"type":"point","x":200,"y":50},{"type":"point","x":225,"y":0},{"type":"point","x":200,"y":-50},{"type":"point","x":150,"y":-75},{"type":"close"},{"type":"point","x":50,"y":-125,"move":true},{"type":"point","x":175,"y":-100,"move":false},{"type":"point","x":225,"y":-75,"move":false},{"type":"point","x":250,"y":-25,"move":false},{"type":"point","x":250,"y":25,"move":false},{"type":"point","x":225,"y":75,"move":false},{"type":"point","x":175,"y":100,"move":false},{"type":"point","x":50,"y":125,"move":false},{"type":"point","x":-50,"y":125,"move":false},{"type":"point","x":-175,"y":100,"move":false},{"type":"point","x":-225,"y":75,"move":false},{"type":"point","x":-250,"y":25,"move":false},{"type":"point","x":-250,"y":-25,"move":false},{"type":"point","x":-225,"y":-75,"move":false},{"type":"point","x":-175,"y":-100,"move":false},{"type":"point","x":-50,"y":-125,"move":false},{"type":"close"},{"type":"point","x":-150,"y":-100,"move":true},{"type":"point","x":-150,"y":-150,"move":false},{"type":"point","x":-125,"y":-112.5,"move":false},{"type":"point","x":-200,"y":87.5,"move":true},{"type":"point","x":-212.5,"y":137.5,"move":false},{"type":"point","x":-175,"y":100,"move":false},{"type":"point","x":50,"y":125,"move":true},{"type":"point","x":50,"y":175,"move":false},{"type":"point","x":25,"y":125,"move":false},{"type":"point","x":225,"y":75,"move":true},{"type":"point","x":250,"y":112.5,"move":false},{"type":"point","x":200,"y":87.5,"move":false},{"type":"point","x":175,"y":-100,"move":true},{"type":"point","x":187.5,"y":-150,"move":false},{"type":"point","x":150,"y":-100,"move":false},{"type":"point","x":-25,"y":-100,"move":true},{"type":"point","x":-12.5,"y":-50,"move":false},{"type":"point","x":0,"y":-100,"move":false},{"type":"point","x":200,"y":-50,"move":true},{"type":"point","x":175,"y":-12.5,"move":false},{"type":"point","x":212.5,"y":-25,"move":false},{"type":"point","x":175,"y":62.5,"move":true},{"type":"point","x":150,"y":37.5,"move":false},{"type":"point","x":150,"y":75,"move":false},{"type":"point","x":-125,"y":87.5,"move":true},{"type":"point","x":-100,"y":37.5,"move":false},{"type":"point","x":-100,"y":100,"move":false},{"type":"point","x":-225,"y":-25,"move":true},{"type":"point","x":-175,"y":0,"move":false},{"type":"point","x":-225,"y":0,"move":false},{"type":"fill","r":150,"g":110,"b":80},{"type":"stroke","r":90,"g":75,"b":50}]`
        ), onPlayerHit(rarity, enemy) {
            const bullet = {x:player.x,y:player.y,size:35,speed:15,damage:2+0.5*rarity,direction:Math.random()*Math.PI,triggerExpire:true,pierce:0,offsetTick: 6};
            for (var i = 0; i < 6; i++) {
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
            return 1 + stats.extraHealth*(0.1 + 0.03 * rarity);
        }
/*WC*/},{
        name: "Wind-up Crank",
        desc: "Reduced firerate, massive damage boost",
        drawPath: JSON.parse(
            `[{"type":"point","x":-250,"y":-25},{"type":"point","x":-237.5,"y":-75},{"type":"point","x":-187.5,"y":-87.5},{"type":"point","x":187.5,"y":-87.5},{"type":"point","x":237.5,"y":-75},{"type":"point","x":250,"y":-25},{"type":"point","x":237.5,"y":25},{"type":"point","x":187.5,"y":37.5},{"type":"point","x":-187.5,"y":37.5},{"type":"point","x":-237.5,"y":25},{"type":"close"},{"type":"fill","r":100,"g":100,"b":100},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":237.5,"y":-25},{"type":"point","x":237.5,"y":100},{"type":"point","x":225,"y":137.5},{"type":"point","x":187.5,"y":150},{"type":"point","x":150,"y":137.5},{"type":"point","x":137.5,"y":100},{"type":"point","x":137.5,"y":-25},{"type":"point","x":150,"y":-62.5},{"type":"point","x":187.5,"y":-75},{"type":"point","x":225,"y":-62.5},{"type":"close"},{"type":"fill","r":30,"g":30,"b":30},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), statChange(rarity) {
            stats.firerate *= 1.65;
            stats.damage *= 1.8 + 0.15*rarity;
        }
/*TM*/},{
        name: "Toxic Mushrooms",
        desc: "Deal damage to nearby enemies",
        drawPath: JSON.parse(
            `[{"type":"point","x":-175,"y":200},{"type":"point","x":-50,"y":175},{"type":"point","x":-100,"y":-75,"move":false},{"type":"point","x":-225,"y":-50,"move":false},{"type":"close"},{"type":"point","x":-50,"y":175,"move":true},{"type":"point","x":-75,"y":50,"move":false},{"type":"point","x":-75,"y":-100,"move":false},{"type":"point","x":50,"y":-100,"move":false},{"type":"point","x":50,"y":175,"move":false},{"type":"close"},{"type":"point","x":50,"y":175,"move":true},{"type":"point","x":50,"y":50,"move":false},{"type":"point","x":75,"y":-75,"move":false},{"type":"point","x":200,"y":-50,"move":false},{"type":"point","x":150,"y":200,"move":false},{"type":"close"},{"type":"fill","r":150,"g":155,"b":120},{"type":"stroke","r":50,"g":50,"b":30},{"type":"point","x":-212.5,"y":0,"move":false},{"type":"point","x":-237.5,"y":25,"move":false},{"type":"point","x":-275,"y":12.5,"move":false},{"type":"point","x":-287.5,"y":-37.5,"move":false},{"type":"point","x":-287.5,"y":-87.5,"move":false},{"type":"point","x":-262.5,"y":-137.5,"move":false},{"type":"point","x":-187.5,"y":-175,"move":false},{"type":"point","x":-112.5,"y":-175,"move":false},{"type":"point","x":-62.5,"y":-225,"move":false},{"type":"point","x":37.5,"y":-225,"move":false},{"type":"point","x":87.5,"y":-187.5,"move":false},{"type":"point","x":150,"y":-212.5,"move":false},{"type":"point","x":250,"y":-175,"move":false},{"type":"point","x":275,"y":-87.5,"move":false},{"type":"point","x":262.5,"y":-25,"move":false},{"type":"point","x":212.5,"y":0,"move":false},{"type":"point","x":187.5,"y":0,"move":false},{"type":"point","x":162.5,"y":-37.5,"move":false},{"type":"point","x":100,"y":-50,"move":false},{"type":"point","x":62.5,"y":-25,"move":false},{"type":"point","x":37.5,"y":-25,"move":false},{"type":"point","x":12.5,"y":-75,"move":false},{"type":"point","x":-50,"y":-75,"move":false},{"type":"point","x":-87.5,"y":-25,"move":false},{"type":"point","x":-137.5,"y":-25,"move":false},{"type":"close"},{"type":"fill","r":0,"g":65,"b":0},{"type":"point","x":-112.5,"y":-175,"move":true},{"type":"point","x":-112.5,"y":-125,"move":false},{"type":"point","x":87.5,"y":-187.5,"move":true},{"type":"point","x":87.5,"y":-137.5,"move":false},{"type":"point","x":-75,"y":-50,"move":true},{"type":"stroke","r":0,"g":25,"b":0}]`
        ),cloudPath: JSON.parse(
            `[{"type":"point","x":0,"y":-250},{"type":"point","x":-187.5,"y":-187.5},{"type":"point","x":-250,"y":0},{"type":"point","x":-187.5,"y":187.5},{"type":"point","x":0,"y":250},{"type":"point","x":187.5,"y":187.5},{"type":"point","x":250,"y":0},{"type":"point","x":187.5,"y":-187.5},{"type":"close"},{"type":"fill","r":0,"g":255,"b":0},{"type":"stroke","r":0,"g":50,"b":0}]`
        ), playerTick(rarity) {
            if (!(game.tick%10)) bulletBuffer.push(new Bullet({x:player.x,y:player.y,speed:0,size:175+rarity*25,damage:0.75+0.35*rarity,drawPath:this.cloudPath,drawAlpha:0.1,lifetime:0.5,wallPierce:true}))
        }
/*SB*/},{
        name: "Smoke Bomb",
        desc: "Deal damage to nearby enemies while dashing",
        drawPath: JSON.parse(
            `[{"type":"point","x":-200,"y":200},{"type":"point","x":-225,"y":150},{"type":"point","x":-225,"y":100},{"type":"point","x":75,"y":-200},{"type":"point","x":125,"y":-200},{"type":"point","x":175,"y":-175},{"type":"point","x":200,"y":-125},{"type":"point","x":200,"y":-75},{"type":"point","x":-100,"y":225},{"type":"point","x":-150,"y":225},{"type":"close"},{"type":"fill","r":25,"g":25,"b":25},{"type":"point","x":75,"y":-200,"move":true},{"type":"point","x":75,"y":-150,"move":false},{"type":"point","x":100,"y":-100,"move":false},{"type":"point","x":150,"y":-75,"move":false},{"type":"point","x":200,"y":-75,"move":false},{"type":"fill","r":25,"g":25,"b":25},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-75,"y":200,"move":false},{"type":"point","x":175,"y":-50,"move":false},{"type":"point","x":187.5,"y":0,"move":false},{"type":"point","x":187.5,"y":75,"move":false},{"type":"point","x":150,"y":112.5,"move":false},{"type":"point","x":100,"y":125,"move":false},{"type":"point","x":125,"y":125,"move":false},{"type":"point","x":112.5,"y":187.5,"move":false},{"type":"point","x":75,"y":225,"move":false},{"type":"point","x":0,"y":237.5,"move":false},{"type":"point","x":-62.5,"y":212.5,"move":false},{"type":"close"},{"type":"point","x":-200,"y":75,"move":true},{"type":"point","x":25,"y":-150,"move":false},{"type":"point","x":12.5,"y":-175,"move":false},{"type":"point","x":-100,"y":-175,"move":false},{"type":"point","x":-150,"y":-125,"move":false},{"type":"point","x":-150,"y":-100,"move":false},{"type":"point","x":-187.5,"y":-125,"move":false},{"type":"point","x":-225,"y":-100,"move":false},{"type":"point","x":-250,"y":-37.5,"move":false},{"type":"point","x":-237.5,"y":37.5,"move":false},{"type":"close"},{"type":"fill","r":75,"g":75,"b":75},{"type":"stroke","r":50,"g":50,"b":50}]`
        ),cloudPath: JSON.parse(
            `[{"type":"point","x":0,"y":-250},{"type":"point","x":-187.5,"y":-187.5},{"type":"point","x":-250,"y":0},{"type":"point","x":-187.5,"y":187.5},{"type":"point","x":0,"y":250},{"type":"point","x":187.5,"y":187.5},{"type":"point","x":250,"y":0},{"type":"point","x":187.5,"y":-187.5},{"type":"close"},{"type":"fill","r":75,"g":75,"b":75},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), statChange() {
            stats.smoke = true;
        }, playerTick(rarity) {
            if (player.smokeFrames) {
                bulletBuffer.push(new Bullet({x:player.x,y:player.y,speed:0,size:100+rarity*25,damage:0.6+0.2*rarity,drawPath:this.cloudPath,drawAlpha:0.1,lifetime:0.5,wallPierce:true}))
                player.smokeFrames--;
            }
        }
/*BH*/},{
        name: "Beating Heart",
        desc: "Bullets deal more damage the longer they exist",
        drawPath: JSON.parse(
            `[{"type":"point","x":-25,"y":125},{"type":"point","x":25,"y":50},{"type":"point","x":50,"y":-50},{"type":"point","x":75,"y":-75},{"type":"point","x":125,"y":-75},{"type":"point","x":125,"y":-50},{"type":"point","x":100,"y":-50},{"type":"point","x":125,"y":-25},{"type":"point","x":150,"y":50},{"type":"point","x":150,"y":125},{"type":"point","x":125,"y":175},{"type":"point","x":75,"y":175},{"type":"point","x":0,"y":150},{"type":"close"},{"type":"fill","r":150,"g":100,"b":125},{"type":"stroke","r":100,"g":50,"b":75},{"type":"point","x":25,"y":50},{"type":"point","x":0,"y":25},{"type":"point","x":-50,"y":25},{"type":"point","x":-62.5,"y":75},{"type":"point","x":-25,"y":125},{"type":"close"},{"type":"fill","r":150,"g":100,"b":150},{"type":"stroke","r":100,"g":50,"b":100},{"type":"point","x":-12.5,"y":25},{"type":"point","x":0,"y":25},{"type":"point","x":25,"y":50},{"type":"point","x":50,"y":-50},{"type":"point","x":75,"y":-75},{"type":"point","x":112.5,"y":-75},{"type":"point","x":100,"y":-100},{"type":"point","x":62.5,"y":-100},{"type":"point","x":62.5,"y":-150},{"type":"point","x":50,"y":-150},{"type":"point","x":50,"y":-100},{"type":"point","x":12.5,"y":-75},{"type":"point","x":0,"y":-125},{"type":"point","x":-12.5,"y":-125},{"type":"point","x":0,"y":-62.5},{"type":"close"},{"type":"fill","r":175,"g":50,"b":50},{"type":"stroke","r":100,"g":50,"b":50},{"type":"point","x":-12.5,"y":25},{"type":"point","x":0,"y":-75},{"type":"point","x":37.5,"y":-112.5},{"type":"point","x":100,"y":-112.5},{"type":"point","x":100,"y":-125},{"type":"point","x":37.5,"y":-125},{"type":"point","x":-12.5,"y":-87.5},{"type":"point","x":-12.5,"y":-162.5},{"type":"point","x":-25,"y":-162.5},{"type":"point","x":-25,"y":-100},{"type":"point","x":-62.5,"y":-137.5},{"type":"point","x":-112.5,"y":-137.5},{"type":"point","x":-112.5,"y":-125},{"type":"point","x":-75,"y":-125},{"type":"point","x":-37.5,"y":-75},{"type":"point","x":-50,"y":25},{"type":"close"},{"type":"point","x":-62.5,"y":75,"move":true},{"type":"point","x":-25,"y":125,"move":false},{"type":"point","x":-62.5,"y":125,"move":false},{"type":"point","x":-75,"y":112.5,"move":false},{"type":"close"},{"type":"fill","r":75,"g":90,"b":150},{"type":"stroke","r":50,"g":50,"b":100}]`
        ), damageBoost(rarity,bullet) {
            return 1 + bullet.tick * (0.005 + 0.002 * rarity);
        }
/*AM*/},{
        name: "Anger Mark",
        desc: "Deal a lot more damage after getting hit",
        drawPath: JSON.parse(
            `[{"type":"point","x":-50,"y":-200,"move":false},{"type":"point","x":-75,"y":-125,"move":false},{"type":"point","x":-125,"y":-75,"move":false},{"type":"point","x":-200,"y":-50,"move":false},{"type":"point","x":-200,"y":-75,"move":false},{"type":"point","x":-137.5,"y":-100,"move":false},{"type":"point","x":-100,"y":-137.5,"move":false},{"type":"point","x":-75,"y":-200,"move":false},{"type":"close"},{"type":"point","x":50,"y":-200,"move":true},{"type":"point","x":75,"y":-125,"move":false},{"type":"point","x":125,"y":-75,"move":false},{"type":"point","x":200,"y":-50,"move":false},{"type":"point","x":200,"y":-75,"move":false},{"type":"point","x":137.5,"y":-100,"move":false},{"type":"point","x":100,"y":-137.5,"move":false},{"type":"point","x":75,"y":-200,"move":false},{"type":"close"},{"type":"point","x":-200,"y":50,"move":true},{"type":"point","x":-125,"y":75,"move":false},{"type":"point","x":-75,"y":125,"move":false},{"type":"point","x":-50,"y":200,"move":false},{"type":"point","x":-75,"y":200,"move":false},{"type":"point","x":-100,"y":137.5,"move":false},{"type":"point","x":-137.5,"y":100,"move":false},{"type":"point","x":-200,"y":75,"move":false},{"type":"close"},{"type":"point","x":50,"y":200,"move":true},{"type":"point","x":75,"y":125,"move":false},{"type":"point","x":125,"y":75,"move":false},{"type":"point","x":200,"y":50,"move":false},{"type":"point","x":200,"y":75,"move":false},{"type":"point","x":137.5,"y":100,"move":false},{"type":"point","x":100,"y":137.5,"move":false},{"type":"point","x":75,"y":200,"move":false},{"type":"close"},{"type":"fill","r":100,"g":0,"b":0},{"type":"stroke","r":50,"g":0,"b":0}]`
        ),angerPath: JSON.parse(
            `[{"type":"point","x":-250,"y":-200},{"type":"point","x":-200,"y":-250},{"type":"point","x":200,"y":-250},{"type":"point","x":250,"y":-200},{"type":"point","x":250,"y":200},{"type":"point","x":200,"y":250},{"type":"point","x":-200,"y":250},{"type":"point","x":-250,"y":200},{"type":"close"},{"type":"fill","r":255,"g":50,"b":50},{"type":"stroke","r":100,"g":50,"b":50}]`
        ), damageBoost(rarity,bullet) {
            return 1 + (player.rage || 0);
        }, onPlayerHit(rarity,enemy,blue,red) {
            if (!player.rage) player.rage = 0;
            player.rage += 2 + rarity;
        }, playerTick(rarity) {
            if (player.rage > 0) {
                draw(player.x,player.y,this.angerPath,(stats.playerSize+50)*player.rage/3,-player.rotationTick, 0.2);
                player.rage -= 0.01-0.002*rarity;
            }
        }
/*MC*/},{
        name: "Metal Coil",
        desc: "Bullets have a chance to spawn bigger and stronger",
        drawPath: JSON.parse(
            `[{"type":"point","x":225,"y":-100},{"type":"point","x":225,"y":-175},{"type":"point","x":175,"y":-225},{"type":"point","x":100,"y":-225},{"type":"point","x":50,"y":-175},{"type":"point","x":50,"y":-100},{"type":"point","x":25,"y":-125},{"type":"point","x":0,"y":-125},{"type":"point","x":0,"y":-100},{"type":"point","x":-25,"y":-100},{"type":"point","x":-25,"y":-75},{"type":"point","x":-50,"y":-75},{"type":"point","x":-50,"y":-50},{"type":"point","x":-75,"y":-50},{"type":"point","x":-75,"y":-25},{"type":"point","x":-100,"y":-25},{"type":"point","x":-100,"y":0},{"type":"point","x":-125,"y":0},{"type":"point","x":-125,"y":25},{"type":"point","x":-100,"y":50},{"type":"point","x":-100,"y":75},{"type":"point","x":-75,"y":100},{"type":"point","x":-75,"y":162.5},{"type":"point","x":-112.5,"y":200},{"type":"point","x":-162.5,"y":200},{"type":"point","x":-200,"y":162.5},{"type":"point","x":-200,"y":100},{"type":"point","x":-225,"y":100},{"type":"point","x":-225,"y":175},{"type":"point","x":-175,"y":225},{"type":"point","x":-100,"y":225},{"type":"point","x":-50,"y":175},{"type":"point","x":-50,"y":125},{"type":"point","x":-25,"y":150},{"type":"point","x":0,"y":150},{"type":"point","x":0,"y":125},{"type":"point","x":25,"y":125},{"type":"point","x":25,"y":100},{"type":"point","x":50,"y":100},{"type":"point","x":50,"y":75},{"type":"point","x":75,"y":75},{"type":"point","x":75,"y":50},{"type":"point","x":100,"y":50},{"type":"point","x":100,"y":25},{"type":"point","x":125,"y":25},{"type":"point","x":125,"y":0},{"type":"point","x":150,"y":0},{"type":"point","x":150,"y":-25},{"type":"point","x":75,"y":-100},{"type":"point","x":75,"y":-162.5},{"type":"point","x":112.5,"y":-200},{"type":"point","x":162.5,"y":-200},{"type":"point","x":200,"y":-162.5},{"type":"point","x":200,"y":-100},{"type":"close"},{"type":"fill","r":80,"g":80,"b":80},{"type":"point","x":50,"y":-100,"move":true},{"type":"point","x":125,"y":-25,"move":false},{"type":"point","x":125,"y":0,"move":true},{"type":"point","x":25,"y":-100,"move":false},{"type":"point","x":0,"y":-100,"move":true},{"type":"point","x":100,"y":0,"move":false},{"type":"point","x":100,"y":25,"move":true},{"type":"point","x":0,"y":-75,"move":false},{"type":"point","x":-25,"y":-75,"move":true},{"type":"point","x":75,"y":25,"move":false},{"type":"point","x":75,"y":50,"move":true},{"type":"point","x":-25,"y":-50,"move":false},{"type":"point","x":-50,"y":-50,"move":true},{"type":"point","x":50,"y":50,"move":false},{"type":"point","x":50,"y":75,"move":true},{"type":"point","x":-50,"y":-25,"move":false},{"type":"point","x":-75,"y":-25,"move":true},{"type":"point","x":25,"y":75,"move":false},{"type":"point","x":25,"y":100,"move":true},{"type":"point","x":-75,"y":0,"move":false},{"type":"point","x":-100,"y":0,"move":true},{"type":"point","x":0,"y":100,"move":false},{"type":"point","x":0,"y":125,"move":true},{"type":"point","x":-100,"y":25,"move":false},{"type":"point","x":-100,"y":50,"move":true},{"type":"point","x":-25,"y":125,"move":false},{"type":"stroke","r":30,"g":25,"b":25}]`
        ), onSpawn(rarity,bullet) {
            if (random() < 0.2 + 0.05*rarity) {
                bullet.damage *= 1.6 + 0.2*rarity;
                bullet.targetSize *= 1.6 + 0.2*rarity;
                ease(bullet,"size", bullet.targetSize, 0.1);
            }
        }
/*RA*/},{
        name: "Razor",
        desc: "Bullets apply bleed stacks",
        drawPath: JSON.parse(
            `[{"type":"point","x":-250,"y":75},{"type":"point","x":75,"y":-250},{"type":"point","x":150,"y":-175},{"type":"point","x":125,"y":-150},{"type":"point","x":150,"y":-125},{"type":"point","x":175,"y":-150},{"type":"point","x":250,"y":-75},{"type":"point","x":-75,"y":250},{"type":"point","x":-150,"y":175},{"type":"point","x":-125,"y":150},{"type":"point","x":-150,"y":125},{"type":"point","x":-175,"y":150},{"type":"close"},{"type":"point","x":-37.5,"y":12.5,"move":true},{"type":"point","x":-12.5,"y":37.5,"move":false},{"type":"point","x":37.5,"y":-12.5,"move":false},{"type":"point","x":12.5,"y":-37.5,"move":false},{"type":"close"},{"type":"fill","r":100,"g":100,"b":100},{"type":"point","x":-125,"y":125,"move":true},{"type":"point","x":-37.5,"y":37.5,"move":false},{"type":"point","x":37.5,"y":-37.5,"move":true},{"type":"point","x":125,"y":-125,"move":false},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":250,"y":-75,"move":false},{"type":"point","x":50,"y":125,"move":false},{"type":"point","x":100,"y":125,"move":false},{"type":"point","x":125,"y":175,"move":false},{"type":"point","x":125,"y":200,"move":false},{"type":"point","x":137.5,"y":212.5,"move":false},{"type":"point","x":150,"y":200,"move":false},{"type":"point","x":150,"y":150,"move":false},{"type":"point","x":175,"y":50,"move":false},{"type":"close"},{"type":"fill","r":150,"g":0,"b":0},{"type":"stroke","r":50,"g":0,"b":0}]`
        ), blood: JSON.parse(
            `[{"type":"point","x":-175,"y":0,"move":false},{"type":"point","x":-125,"y":125,"move":false},{"type":"point","x":0,"y":175,"move":false},{"type":"point","x":125,"y":125,"move":false},{"type":"point","x":175,"y":0,"move":false},{"type":"point","x":125,"y":-125,"move":false},{"type":"point","x":50,"y":-200,"move":false},{"type":"point","x":0,"y":-300,"move":false},{"type":"point","x":-50,"y":-200,"move":false},{"type":"point","x":-125,"y":-125,"move":false},{"type":"close"},{"type":"fill","r":150,"g":0,"b":0},{"type":"stroke","r":50,"g":0,"b":0}]`
        ), onHit(rarity,bullet,enemy) {
            enemy.addEffect(11,30,bullet.damage*0.025 + 0.005 + 0.0015*rarity,this.blood,true);
        }

/*OS*/},{
        name: "Orbiting Shield",
        desc: "Spawn an orbiting shield that blocks and damages enemies",
        drawPath: JSON.parse(
            `[{"type":"point","x":0,"y":-200},{"type":"point","x":-75,"y":-175},{"type":"point","x":-150,"y":-175},{"type":"point","x":-225,"y":-225},{"type":"point","x":-225,"y":0},{"type":"point","x":-175,"y":125},{"type":"point","x":-100,"y":200},{"type":"point","x":0,"y":250},{"type":"point","x":100,"y":200},{"type":"point","x":175,"y":125},{"type":"point","x":225,"y":0},{"type":"point","x":225,"y":-225},{"type":"point","x":150,"y":-175},{"type":"point","x":75,"y":-175},{"type":"close"},{"type":"fill","r":50,"g":150,"b":150},{"type":"stroke","r":25,"g":50,"b":50},{"type":"close"}]`
        ), statChange(rarity) {
            if (!stats.shields) stats.shields = [];
            stats.shields.push(0)
            stats.shieldCountCurrent = 0;
        }, playerTick(rarity) {
            let toReturnOrNotToReturn = false;
            if (stats.shields[stats.shieldCountCurrent] > 0) {
                stats.shields[stats.shieldCountCurrent]--;
                toReturnOrNotToReturn = true;
            }

            stats.shieldCountCurrent++;
            const rotation = player.rotationTick*2 + Math.PI*2*stats.shieldCountCurrent/stats.shields.length;
            const position = { size: 50+12.5*rarity, x: player.x + Math.cos(rotation)*175, y: player.y + Math.sin(rotation)*175};
            if (toReturnOrNotToReturn) { if (Math.abs(stats.shields[stats.shieldCountCurrent-1]-90) > 60) draw(position.x,position.y,this.drawPath,position.size*(Math.abs(stats.shields[stats.shieldCountCurrent-1]-90)-60)/30);
            } else draw(position.x,position.y,this.drawPath,position.size);
            
            if (toReturnOrNotToReturn) {
                if (stats.shieldCountCurrent >= stats.shields.length) stats.shieldCountCurrent = 0;
                return;
            }

            //detect enemies
            enemies.forEach(enemy => {
                //console.log(Math.hypot(enemy.x-position.x,enemy.y-position.y) < position.size)
                if (Math.hypot(enemy.x-position.x,enemy.y-position.y) < position.size + enemy.size) {
                    if (enemy.projectile) {
                        enemy.health = 0;
                        enemy.vx = 0;
                        enemy.vy = 0;
                    } else if (!enemy.spawning) {
                        stats.shields[stats.shieldCountCurrent-1] = 180;
                        enemy.vx *= -1;
                        enemy.vy *= -1;
                        enemy.health -= 4+1*rarity;
                        dmgNumbers.push(new DamageNumber(enemy.x,enemy.y,4+1*rarity));
                    }
                }
            })

            if (stats.shieldCountCurrent >= stats.shields.length) stats.shieldCountCurrent = 0;
        }
/*SP*/},{
        name: "Shrink Pill",
        desc: "Greatly reduces player size",
        drawPath: JSON.parse(
            `[{"type":"point","x":-200,"y":200},{"type":"point","x":-225,"y":150},{"type":"point","x":-225,"y":50},{"type":"point","x":-175,"y":-25},{"type":"point","x":-100,"y":-100},{"type":"point","x":100,"y":100},{"type":"point","x":25,"y":175},{"type":"point","x":-50,"y":225},{"type":"point","x":-150,"y":225},{"type":"close"},{"type":"fill","r":100,"g":100,"b":175},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-100,"y":-100},{"type":"point","x":100,"y":100},{"type":"point","x":175,"y":25},{"type":"point","x":225,"y":-50},{"type":"point","x":225,"y":-150},{"type":"point","x":200,"y":-200},{"type":"point","x":150,"y":-225},{"type":"point","x":50,"y":-225},{"type":"point","x":-25,"y":-175},{"type":"close"},{"type":"fill","r":175,"g":175,"b":100},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), statChange(rarity) {
            stats.playerSize *= 0.5 - 0.05*rarity;
        }
/*TF*/},{
        name: "Tail Feather",
        desc: "Greatly reduces player size",
        drawPath: JSON.parse(
            `[{"type":"point","x":-150,"y":150,"move":false},{"type":"point","x":0,"y":125,"move":false},{"type":"point","x":125,"y":50,"move":false},{"type":"point","x":200,"y":-75,"move":false},{"type":"point","x":200,"y":-175,"move":false},{"type":"point","x":175,"y":-225,"move":false},{"type":"point","x":150,"y":-225,"move":false},{"type":"point","x":100,"y":-200,"move":false},{"type":"point","x":50,"y":-125,"move":false},{"type":"point","x":-25,"y":-50,"move":false},{"type":"point","x":-100,"y":0,"move":false},{"type":"point","x":-150,"y":75,"move":false},{"type":"close"},{"type":"fill","r":200,"g":150,"b":75},{"type":"point","x":-250,"y":200,"move":false},{"type":"point","x":-150,"y":150,"move":false},{"type":"point","x":-12.5,"y":50,"move":false},{"type":"point","x":87.5,"y":-50,"move":false},{"type":"point","x":150,"y":-175,"move":false},{"type":"point","x":75,"y":-100,"move":true},{"type":"point","x":87.5,"y":-50,"move":false},{"type":"point","x":150,"y":-62.5,"move":false},{"type":"point","x":112.5,"y":-150,"move":true},{"type":"point","x":125,"y":-125,"move":false},{"type":"point","x":150,"y":-137.5,"move":false},{"type":"point","x":25,"y":-50,"move":true},{"type":"point","x":37.5,"y":0,"move":false},{"type":"point","x":100,"y":0,"move":false},{"type":"point","x":-25,"y":-25,"move":true},{"type":"point","x":-12.5,"y":50,"move":false},{"type":"point","x":62.5,"y":50,"move":false},{"type":"point","x":-75,"y":25,"move":true},{"type":"point","x":-62.5,"y":12.5,"move":true},{"type":"point","x":-50,"y":75,"move":false},{"type":"point","x":12.5,"y":87.5,"move":false},{"type":"point","x":-100,"y":50,"move":true},{"type":"point","x":-87.5,"y":100,"move":false},{"type":"point","x":-50,"y":112.5,"move":false},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), statChange(rarity) {
            stats.dashRegenerateRate *= 1.6 + 0.15*rarity;
        }
/*DC*/},{
        name: "Deadeye's Charm",
        desc: "Massive damage boost in each room until you miss a shot",
        drawPath: JSON.parse(
            `[{"type":"point","x":0,"y":-137.5},{"type":"point","x":-75,"y":-125},{"type":"point","x":-125,"y":-75},{"type":"point","x":-137.5,"y":0},{"type":"point","x":-125,"y":75},{"type":"point","x":-75,"y":125},{"type":"point","x":0,"y":137.5},{"type":"point","x":75,"y":125},{"type":"point","x":125,"y":75},{"type":"point","x":137.5,"y":0},{"type":"point","x":125,"y":-75},{"type":"point","x":75,"y":-125},{"type":"close"},{"type":"fill","r":30,"g":30,"b":30},{"type":"point","x":-100,"y":-100,"move":true},{"type":"point","x":-175,"y":-150,"move":false},{"type":"point","x":-200,"y":-212.5,"move":false},{"type":"point","x":100,"y":-100,"move":true},{"type":"point","x":175,"y":-150,"move":false},{"type":"point","x":200,"y":-212.5,"move":false},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":0,"y":-62.5,"move":false},{"type":"point","x":-50,"y":-50,"move":false},{"type":"point","x":-62.5,"y":0,"move":false},{"type":"point","x":-50,"y":50,"move":false},{"type":"point","x":0,"y":62.5,"move":false},{"type":"point","x":50,"y":50,"move":false},{"type":"point","x":62.5,"y":0,"move":false},{"type":"point","x":50,"y":-50,"move":false},{"type":"close"},{"type":"point","x":0,"y":-112.5,"move":true},{"type":"point","x":0,"y":112.5,"move":false},{"type":"point","x":-112.5,"y":0,"move":true},{"type":"point","x":112.5,"y":0,"move":false},{"type":"stroke","r":255,"g":75,"b":75}]`
        ), damageBoost(rarity) {
            return 1 + (0.75 + 0.2*rarity)*!!stats.deadEye;
        }, playerTick(rarity) {
            if (!enemies.length) stats.deadEye = true;
        }, onHit(rarity,bullet) {
            bullet.enemyHit = true;
        }, expiration(rarity,bullet) {
            if (!bullet.enemyHit) stats.deadEye = false;
        }
/*RD*/},{
        name: "Red Dot",
        desc: "Massive accuracy increase, damage increase",
        drawPath: JSON.parse(
            `[{"type":"point","x":0,"y":-250},{"type":"point","x":175,"y":-175},{"type":"point","x":250,"y":0},{"type":"point","x":175,"y":175},{"type":"point","x":0,"y":250},{"type":"point","x":-175,"y":175},{"type":"point","x":-250,"y":0},{"type":"point","x":-175,"y":-175},{"type":"close"},{"type":"point","x":0,"y":-200,"move":true},{"type":"point","x":-137.5,"y":-137.5,"move":false},{"type":"point","x":-200,"y":0,"move":false},{"type":"point","x":-137.5,"y":137.5,"move":false},{"type":"point","x":0,"y":200,"move":false},{"type":"point","x":137.5,"y":137.5,"move":false},{"type":"point","x":200,"y":0,"move":false},{"type":"point","x":137.5,"y":-137.5,"move":false},{"type":"close"},{"type":"fill","r":75,"g":75,"b":75},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":0,"y":-75,"move":false},{"type":"point","x":-50,"y":-50,"move":false},{"type":"point","x":-75,"y":0,"move":false},{"type":"point","x":-50,"y":50,"move":false},{"type":"point","x":0,"y":75,"move":false},{"type":"point","x":50,"y":50,"move":false},{"type":"point","x":75,"y":0,"move":false},{"type":"point","x":50,"y":-50,"move":false},{"type":"close"},{"type":"fill","r":200,"g":50,"b":50},{"type":"stroke","r":75,"g":0,"b":0}]`
        ), statChange(rarity) {
            stats.damage *= 1.2 + 0.05*rarity;
            stats.bloom *= 0.2-0.04*rarity;
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
            bulletBuffer.push(new Bullet({x: bullet.x, y: bullet.y, speed: 0, size: bullet.size*8 + 85, damage: bullet.damage**1.1*0.7 + bullet.size/50 + 0.15, drawPath: this.bombPath, lifetime: 0.3, wallPierce: true, pierce: 10,direction:Math.random()*Math.PI,drawAlpha:0.4}))
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
        desc: "Bullets travel almost instantly, bullets pierce and are much bigger, removes bullet lifetime",
        drawPath: JSON.parse(
            `[{"type":"point","x":-150,"y":87.5},{"type":"point","x":-100,"y":250},{"type":"point","x":-50,"y":250},{"type":"point","x":-100,"y":75},{"type":"point","x":12.5,"y":12.5},{"type":"point","x":12.5,"y":-12.5},{"type":"point","x":-25,"y":-50},{"type":"point","x":-100,"y":-75},{"type":"point","x":-212.5,"y":-12.5},{"type":"point","x":-225,"y":37.5},{"type":"point","x":-200,"y":75},{"type":"point","x":-150,"y":87.5},{"type":"point","x":-100,"y":75},{"type":"fill","r":100,"g":100,"b":100},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-75,"y":-87.5},{"type":"point","x":-62.5,"y":-150},{"type":"point","x":25,"y":-150},{"type":"point","x":162.5,"y":-112.5},{"type":"point","x":212.5,"y":-37.5},{"type":"point","x":187.5,"y":12.5},{"type":"point","x":37.5,"y":12.5},{"type":"point","x":37.5,"y":-12.5},{"type":"point","x":0,"y":-62.5},{"type":"close"},{"type":"fill","r":150,"g":150,"b":75},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), statChange(_) {
            stats.lifetime = undefined;
            stats.bulletSize = stats.bulletSize*1.75 + 30; 
            stats.previousBulletSpeed = stats.bulletSpeed;
            stats.bulletSpeed += 300;
            if (!stats.trailColor) stats.trailColor = "#cc0";
            stats.trailLength = 10;
            if (stats.pierce) stats.pierce += 12;
            else stats.pierce = 12;
            stats.noDrawBullets = true;
        }
/*GR*/},{
        name: "Ghost Reactor",
        desc: "Bullets pierce everything, gaining damage and size when they do",
        drawPath: JSON.parse(
            `[{"type":"point","x":-250,"y":150},{"type":"point","x":-225,"y":225},{"type":"point","x":-150,"y":250},{"type":"point","x":-75,"y":250},{"type":"point","x":250,"y":-75},{"type":"point","x":250,"y":-150},{"type":"point","x":225,"y":-225},{"type":"point","x":150,"y":-250},{"type":"point","x":75,"y":-250},{"type":"point","x":-250,"y":75},{"type":"close"},{"type":"fill","r":75,"g":75,"b":75},{"type":"point","x":75,"y":-250,"move":true},{"type":"point","x":75,"y":-175,"move":false},{"type":"point","x":100,"y":-100,"move":false},{"type":"point","x":175,"y":-75,"move":false},{"type":"point","x":250,"y":-75,"move":false},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-200,"y":125,"move":false},{"type":"point","x":-200,"y":175,"move":false},{"type":"point","x":-175,"y":200,"move":false},{"type":"point","x":-125,"y":200,"move":false},{"type":"point","x":125,"y":-50,"move":false},{"type":"point","x":75,"y":-50,"move":false},{"type":"point","x":50,"y":-75,"move":false},{"type":"point","x":50,"y":-125,"move":false},{"type":"close"},{"type":"point","x":175,"y":-200,"move":true},{"type":"point","x":125,"y":-200,"move":false},{"type":"point","x":125,"y":-150,"move":false},{"type":"point","x":150,"y":-125,"move":false},{"type":"point","x":200,"y":-125,"move":false},{"type":"point","x":200,"y":-175,"move":false},{"type":"close"},{"type":"fill","r":0,"g":125,"b":100},{"type":"stroke","r":0,"g":50,"b":50}]`
        ), statChange(_) {
            stats.projectileHit = true;
            stats.wallPierce = true;
            if (stats.pierce) stats.pierce += 6;
            else stats.pierce = 6;
        }, onHit(_,bullet,enemy) {
            if (enemy.projectiles) {
                bullet.damage *= 1 + enemy.size/100;
                bullet.size *= 1 + enemy.size/100;
                return;
            }
            bullet.damage *= 1.6;
            bullet.size *= 1.6;
        }
/*BV*/},{
        name: "Broken Vase",
        desc: "Bullets explode into shrapnel",
        drawPath: JSON.parse(
            `[{"type":"point","x":-75,"y":-225},{"type":"point","x":0,"y":-212.5},{"type":"point","x":75,"y":-225},{"type":"point","x":0,"y":-237.5},{"type":"point","x":-75,"y":-225},{"type":"point","x":-62.5,"y":-150},{"type":"point","x":-87.5,"y":-100},{"type":"point","x":-150,"y":-50},{"type":"point","x":-175,"y":0},{"type":"point","x":-175,"y":75},{"type":"point","x":-150,"y":150},{"type":"point","x":-100,"y":200},{"type":"point","x":-25,"y":225},{"type":"point","x":12.5,"y":225},{"type":"point","x":100,"y":200},{"type":"point","x":150,"y":150},{"type":"point","x":175,"y":75},{"type":"point","x":175,"y":0},{"type":"point","x":150,"y":-50},{"type":"point","x":87.5,"y":-100},{"type":"point","x":50,"y":-150},{"type":"point","x":75,"y":-225},{"type":"fill","r":100,"g":60,"b":0},{"type":"point","x":-87.5,"y":-100,"move":true},{"type":"point","x":0,"y":-62.5,"move":false},{"type":"point","x":12.5,"y":25,"move":false},{"type":"point","x":0,"y":-25,"move":true},{"type":"point","x":50,"y":-25,"move":false},{"type":"point","x":-150,"y":150,"move":true},{"type":"point","x":-100,"y":37.5,"move":false},{"type":"point","x":-25,"y":75,"move":false},{"type":"point","x":-100,"y":37.5,"move":true},{"type":"point","x":-100,"y":-25,"move":false},{"type":"point","x":-37.5,"y":225,"move":true},{"type":"point","x":-12.5,"y":112.5,"move":false},{"type":"point","x":-37.5,"y":50,"move":false},{"type":"point","x":-12.5,"y":125,"move":true},{"type":"point","x":87.5,"y":100,"move":false},{"type":"point","x":175,"y":0,"move":true},{"type":"point","x":87.5,"y":25,"move":false},{"type":"point","x":50,"y":75,"move":false},{"type":"point","x":62.5,"y":50,"move":true},{"type":"point","x":37.5,"y":12.5,"move":false},{"type":"stroke","r":50,"g":35,"b":25}]`
        ), expiration(_,bullet,enemy) {
            const bullet2 = {offset: 50, x:bullet.x,y:bullet.y,size:bullet.size*0.5,damage:bullet.damage*0.15,direction:Math.random()*Math.PI, trailColor: bullet.trailColor, trailLength: bullet.trailLength};
            for (var i = 0; i < 4; i++) {
                bulletBuffer.push(new Bullet(bullet2));
                bullet2.direction += Math.PI/3;
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
        }, damageBoost(_) { return 2}
/*PB*/},{
        name: "Plasma Ball",
        desc: "Bullets constantly damage nearby enemies",
        drawPath: JSON.parse(
            `[{"type":"point","x":0,"y":250},{"type":"point","x":-125,"y":225},{"type":"point","x":-225,"y":125},{"type":"point","x":-250,"y":0},{"type":"point","x":-225,"y":-125},{"type":"point","x":-125,"y":-225},{"type":"point","x":0,"y":-250},{"type":"point","x":125,"y":-225},{"type":"point","x":225,"y":-125},{"type":"point","x":250,"y":0},{"type":"point","x":225,"y":125},{"type":"point","x":125,"y":225},{"type":"close"},{"type":"fill","r":10,"g":10,"b":35},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":0,"y":0},{"type":"point","x":75,"y":-150},{"type":"point","x":62.5,"y":-200},{"type":"point","x":0,"y":0,"move":true},{"type":"point","x":-137.5,"y":-37.5,"move":false},{"type":"point","x":-200,"y":50,"move":false},{"type":"point","x":0,"y":0,"move":true},{"type":"point","x":87.5,"y":-25,"move":false},{"type":"point","x":175,"y":37.5,"move":false},{"type":"point","x":137.5,"y":12.5,"move":true},{"type":"point","x":187.5,"y":-25,"move":false},{"type":"point","x":50,"y":-100,"move":true},{"type":"point","x":137.5,"y":-100,"move":false},{"type":"point","x":0,"y":0,"move":true},{"type":"point","x":25,"y":87.5,"move":false},{"type":"point","x":-50,"y":162.5,"move":false},{"type":"point","x":-12.5,"y":125,"move":true},{"type":"point","x":25,"y":162.5,"move":false},{"type":"point","x":-87.5,"y":-25,"move":true},{"type":"point","x":-112.5,"y":-125,"move":false},{"type":"stroke","r":5,"g":100,"b":100},{"type":"point","x":0,"y":0,"move":true},{"type":"point","x":-12.5,"y":-62.5,"move":false},{"type":"point","x":-87.5,"y":-162.5,"move":false},{"type":"point","x":-50,"y":-112.5,"move":true},{"type":"point","x":-25,"y":-175,"move":false},{"type":"point","x":0,"y":0,"move":true},{"type":"point","x":-87.5,"y":37.5,"move":false},{"type":"point","x":-87.5,"y":125,"move":false},{"type":"point","x":-150,"y":150,"move":false},{"type":"point","x":-112.5,"y":137.5,"move":true},{"type":"point","x":-87.5,"y":187.5,"move":false},{"type":"point","x":0,"y":0,"move":true},{"type":"point","x":62.5,"y":25,"move":false},{"type":"point","x":125,"y":112.5,"move":false},{"type":"point","x":100,"y":75,"move":true},{"type":"point","x":187.5,"y":62.5,"move":false},{"type":"point","x":0,"y":0,"move":true},{"type":"point","x":100,"y":-87.5,"move":false},{"type":"point","x":200,"y":-62.5,"move":false},{"type":"point","x":150,"y":-75,"move":true},{"type":"point","x":187.5,"y":-100,"move":false},{"type":"stroke","r":0,"g":200,"b":200}]`
        ),electricityPath: JSON.parse(
            `[{"type":"point","x":0,"y":-250},{"type":"point","x":-187.5,"y":-187.5},{"type":"point","x":-250,"y":0},{"type":"point","x":-187.5,"y":187.5},{"type":"point","x":0,"y":250},{"type":"point","x":187.5,"y":187.5},{"type":"point","x":250,"y":0},{"type":"point","x":187.5,"y":-187.5},{"type":"close"},{"type":"fill","r":25,"g":150,"b":150},{"type":"stroke","r":0,"g":50,"b":50}]`
        ), bulletTick(_, bullet) {
            if (Math.random() < 0.2) bulletBuffer.push(new Bullet({x: bullet.x, y: bullet.y, vx: bullet.vx, vy: bullet.vy, size: Math.max(bullet.targetSize,bullet.size)*1.7 + 150, damage: bullet.damage*0.4, drawPath: this.electricityPath, lifetime: 0.01, wallPierce: true, pierce: 10,direction:Math.random()*Math.PI,drawAlpha:0.2}))
        }
/*BB*/},{
        name: "Bouncy Ball",
        desc: "Bullets bounce & gain damage when they do",
        drawPath: JSON.parse(
            `[{"type":"point","x":0,"y":-250},{"type":"point","x":125,"y":-225},{"type":"point","x":225,"y":-125},{"type":"point","x":250,"y":0},{"type":"point","x":225,"y":125},{"type":"point","x":125,"y":225},{"type":"point","x":0,"y":250},{"type":"point","x":-125,"y":225},{"type":"point","x":-225,"y":125},{"type":"point","x":-250,"y":0},{"type":"point","x":-225,"y":-125},{"type":"point","x":-125,"y":-225},{"type":"close"},{"type":"fill","r":125,"g":60,"b":105},{"type":"stroke","r":55,"g":15,"b":35},{"type":"point","x":150,"y":-150},{"type":"point","x":200,"y":-50},{"type":"point","x":150,"y":50},{"type":"point","x":50,"y":100},{"type":"point","x":-50,"y":50},{"type":"point","x":-100,"y":-50},{"type":"point","x":-50,"y":-150},{"type":"point","x":50,"y":-200},{"type":"close"},{"type":"fill","r":155,"g":75,"b":115},{"type":"stroke","r":140,"g":60,"b":110},{"type":"point","x":125,"y":-125,"move":false},{"type":"point","x":150,"y":-75,"move":false},{"type":"point","x":125,"y":-25,"move":false},{"type":"point","x":75,"y":0,"move":false},{"type":"point","x":25,"y":-25,"move":false},{"type":"point","x":0,"y":-75,"move":false},{"type":"point","x":25,"y":-125,"move":false},{"type":"point","x":75,"y":-150,"move":false},{"type":"close"},{"type":"fill","r":250,"g":135,"b":200},{"type":"stroke","r":230,"g":120,"b":180}]`
        ), statChange(_) {
            stats.bulletBounce = 2;
        }
/*HM*/},{
        name: "Hit Marker",
        desc: "Deal more damage to enemies the more times they are hit",
        drawPath: JSON.parse(
            `[{"type":"point","x":-250,"y":-200},{"type":"point","x":-200,"y":-250},{"type":"point","x":-25,"y":-75},{"type":"point","x":-75,"y":-25},{"type":"close"},{"type":"point","x":200,"y":-250,"move":true},{"type":"point","x":25,"y":-75,"move":false},{"type":"point","x":75,"y":-25,"move":false},{"type":"point","x":250,"y":-200,"move":false},{"type":"close"},{"type":"point","x":250,"y":200,"move":true},{"type":"point","x":200,"y":250,"move":false},{"type":"point","x":25,"y":75,"move":false},{"type":"point","x":75,"y":25,"move":false},{"type":"close"},{"type":"point","x":-200,"y":250,"move":true},{"type":"point","x":-25,"y":75,"move":false},{"type":"point","x":-75,"y":25,"move":false},{"type":"point","x":-250,"y":200,"move":false},{"type":"close"},{"type":"fill","r":75,"g":25,"b":25},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), damageBoost(_,bullet,enemy) {
            if (enemy.hitMarkers) {
                enemy.hitMarkers++;
                return Math.log2(enemy.hitMarkers/15+2);
            } else {
                enemy.hitMarkers = 1;
                return 1;
            }
        }
/*CF*/},{
        name: "Cobra Fang",
        desc: "Spread majority of damage over time with a boost",
        drawPath: JSON.parse(
            `[{"type":"point","x":-100,"y":-250},{"type":"point","x":-25,"y":-150},{"type":"point","x":0,"y":-50},{"type":"point","x":0,"y":25},{"type":"point","x":-25,"y":100},{"type":"point","x":50,"y":25},{"type":"point","x":75,"y":-100},{"type":"point","x":75,"y":-200},{"type":"point","x":62.5,"y":-250},{"type":"fill","r":100,"g":100,"b":100},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":0,"y":25},{"type":"point","x":-25,"y":100},{"type":"point","x":50,"y":25},{"type":"point","x":25,"y":75},{"type":"point","x":-12.5,"y":125},{"type":"point","x":-25,"y":150},{"type":"point","x":-50,"y":162.5},{"type":"point","x":-62.5,"y":150},{"type":"point","x":-37.5,"y":100},{"type":"close"},{"type":"fill","r":0,"g":150,"b":0},{"type":"stroke","r":0,"g":50,"b":0}]`
        ), poison: JSON.parse(
            `[{"type":"point","x":-175,"y":0,"move":false},{"type":"point","x":-125,"y":125,"move":false},{"type":"point","x":0,"y":175,"move":false},{"type":"point","x":125,"y":125,"move":false},{"type":"point","x":175,"y":0,"move":false},{"type":"point","x":125,"y":-125,"move":false},{"type":"point","x":50,"y":-200,"move":false},{"type":"point","x":0,"y":-300,"move":false},{"type":"point","x":-50,"y":-200,"move":false},{"type":"point","x":-125,"y":-125,"move":false},{"type":"close"},{"type":"fill","r":0,"g":150,"b":0},{"type":"stroke","r":0,"g":50,"b":0}]`
        ), statChange(_) {
            stats.damage *= 0.1;
        }, onHit(_,bullet,enemy) {
            enemy.addEffect(10,60,bullet.damage*2.5,this.poison,true);
        }
/*HG*/},{
        name: "Heavy Gears",
        desc: "Hold fire to increase firerate but decrease movement",
        drawPath: JSON.parse(
            `[{"type":"point","x":100,"y":-25},{"type":"point","x":162.5,"y":-50},{"type":"point","x":100,"y":-75},{"type":"point","x":150,"y":-125},{"type":"point","x":75,"y":-125},{"type":"point","x":100,"y":-200},{"type":"point","x":25,"y":-175},{"type":"point","x":25,"y":-250},{"type":"point","x":-25,"y":-200},{"type":"point","x":-50,"y":-262.5},{"type":"point","x":-75,"y":-200},{"type":"point","x":-125,"y":-250},{"type":"point","x":-125,"y":-175},{"type":"point","x":-200,"y":-200},{"type":"point","x":-175,"y":-125},{"type":"point","x":-250,"y":-125},{"type":"point","x":-200,"y":-75},{"type":"point","x":-262.5,"y":-50},{"type":"point","x":-200,"y":-25},{"type":"point","x":-250,"y":25},{"type":"point","x":-175,"y":25},{"type":"point","x":-200,"y":100},{"type":"point","x":-125,"y":75},{"type":"point","x":-125,"y":150},{"type":"point","x":-75,"y":100},{"type":"point","x":-50,"y":162.5},{"type":"point","x":-25,"y":100},{"type":"point","x":25,"y":150,"move":false},{"type":"point","x":25,"y":75,"move":false},{"type":"point","x":100,"y":100,"move":false},{"type":"point","x":75,"y":25,"move":false},{"type":"point","x":150,"y":25,"move":false},{"type":"close"},{"type":"point","x":100,"y":100,"move":true},{"type":"point","x":50,"y":112.5,"move":false},{"type":"point","x":100,"y":125,"move":false},{"type":"point","x":75,"y":175,"move":false},{"type":"point","x":125,"y":150,"move":false},{"type":"point","x":137.5,"y":200,"move":false},{"type":"point","x":150,"y":150,"move":false},{"type":"point","x":200,"y":175,"move":false},{"type":"point","x":175,"y":125,"move":false},{"type":"point","x":225,"y":112.5,"move":false},{"type":"point","x":175,"y":100,"move":false},{"type":"point","x":200,"y":50,"move":false},{"type":"point","x":150,"y":75,"move":false},{"type":"point","x":137.5,"y":25,"move":false},{"type":"point","x":125,"y":75,"move":false},{"type":"point","x":75,"y":50,"move":false},{"type":"point","x":100,"y":100,"move":false},{"type":"fill","r":100,"g":100,"b":100},{"type":"stroke","r":50,"g":50,"b":50}]`
        ), statChange(_) {
            stats.firerateGear = stats.firerate;
            stats.playerSpeedGear = stats.playerSpeed;
        }, playerTick() {
            if (mouse.down) {
                if (stats.firerate > stats.firerateGear/4) stats.firerate *= 0.99;
                if (stats.playerSpeed > stats.playerSpeedGear/4) stats.playerSpeed *= 0.99;
            } else {
                if (stats.firerate >= stats.firerateGear) stats.firerate = stats.firerateGear;
                else stats.firerate *= 1.25;
                if (stats.playerSpeed >= stats.playerSpeedGear) stats.playerSpeed = stats.playerSpeedGear;
                else stats.playerSpeed *= 1.25;
            }
        }
/*AA*/},{
        name: "AA Chip",
        desc: "Bullets launch towards an enemy when in range",
        drawPath: JSON.parse(
            `[{"type":"point","x":-225,"y":-250,"move":false},{"type":"point","x":-250,"y":-225,"move":false},{"type":"point","x":-250,"y":225,"move":false},{"type":"point","x":-225,"y":250,"move":false},{"type":"point","x":225,"y":250,"move":false},{"type":"point","x":250,"y":225,"move":false},{"type":"point","x":250,"y":-225,"move":false},{"type":"point","x":225,"y":-250,"move":false},{"type":"close"},{"type":"fill","r":0,"g":75,"b":0},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":-75,"y":-75,"move":false},{"type":"point","x":75,"y":-75,"move":false},{"type":"point","x":75,"y":75,"move":false},{"type":"point","x":-75,"y":75,"move":false},{"type":"close"},{"type":"point","x":-75,"y":-150,"move":false},{"type":"point","x":-50,"y":-175,"move":false},{"type":"point","x":-50,"y":-250,"move":false},{"type":"point","x":-50,"y":-75,"move":true},{"type":"point","x":-50,"y":-150,"move":false},{"type":"point","x":-25,"y":-175,"move":false},{"type":"point","x":-25,"y":-250,"move":false},{"type":"point","x":-25,"y":-75,"move":true},{"type":"point","x":-25,"y":-125,"move":false},{"type":"point","x":0,"y":-150,"move":false},{"type":"point","x":0,"y":-250,"move":false},{"type":"point","x":0,"y":-75,"move":true},{"type":"point","x":0,"y":-125,"move":false},{"type":"point","x":25,"y":-150,"move":false},{"type":"point","x":25,"y":-250,"move":false},{"type":"point","x":25,"y":-75,"move":true},{"type":"point","x":25,"y":-125,"move":false},{"type":"point","x":75,"y":-175,"move":false},{"type":"point","x":75,"y":-250,"move":false},{"type":"point","x":50,"y":-150,"move":true},{"type":"point","x":50,"y":-250,"move":false},{"type":"point","x":50,"y":-75,"move":true},{"type":"point","x":50,"y":-125,"move":false},{"type":"point","x":125,"y":-200,"move":false},{"type":"point","x":125,"y":-250,"move":false},{"type":"point","x":125,"y":-225,"move":true},{"type":"point","x":200,"y":-225,"move":false},{"type":"point","x":225,"y":-250,"move":false},{"type":"point","x":100,"y":-175,"move":true},{"type":"point","x":100,"y":-250,"move":false},{"type":"point","x":75,"y":-75,"move":true},{"type":"point","x":75,"y":-125,"move":false},{"type":"point","x":150,"y":-200,"move":false},{"type":"point","x":250,"y":-200,"move":false},{"type":"point","x":225,"y":-200,"move":true},{"type":"point","x":250,"y":-225,"move":false},{"type":"point","x":200,"y":-200,"move":true},{"type":"point","x":225,"y":-175,"move":false},{"type":"point","x":250,"y":-175,"move":false},{"type":"point","x":75,"y":-75,"move":true},{"type":"point","x":100,"y":-100,"move":false},{"type":"point","x":100,"y":-125,"move":false},{"type":"point","x":150,"y":-175,"move":false},{"type":"point","x":175,"y":-175,"move":false},{"type":"point","x":250,"y":-100,"move":false},{"type":"point","x":200,"y":-150,"move":true},{"type":"point","x":250,"y":-150,"move":false},{"type":"point","x":125,"y":-150,"move":true},{"type":"point","x":175,"y":-150,"move":false},{"type":"point","x":250,"y":-75,"move":false},{"type":"point","x":100,"y":-100,"move":true},{"type":"point","x":150,"y":-100,"move":false},{"type":"point","x":200,"y":-100,"move":false},{"type":"point","x":250,"y":-50,"move":false},{"type":"point","x":125,"y":-100,"move":true},{"type":"point","x":150,"y":-125,"move":false},{"type":"point","x":175,"y":-100,"move":false},{"type":"point","x":75,"y":-50,"move":true},{"type":"point","x":175,"y":-50,"move":false},{"type":"point","x":200,"y":-75,"move":false},{"type":"point","x":250,"y":-25,"move":false},{"type":"point","x":100,"y":-50,"move":true},{"type":"point","x":125,"y":-75,"move":false},{"type":"point","x":200,"y":-75,"move":false},{"type":"point","x":75,"y":-25,"move":true},{"type":"point","x":150,"y":-25,"move":false},{"type":"point","x":175,"y":0,"move":false},{"type":"point","x":250,"y":0,"move":false},{"type":"point","x":150,"y":-25,"move":true},{"type":"point","x":175,"y":-25,"move":false},{"type":"point","x":200,"y":-50,"move":false},{"type":"point","x":225,"y":-25,"move":false},{"type":"point","x":250,"y":-25,"move":false},{"type":"point","x":75,"y":0,"move":true},{"type":"point","x":125,"y":0,"move":false},{"type":"point","x":150,"y":25,"move":false},{"type":"point","x":250,"y":25,"move":false},{"type":"point","x":75,"y":25,"move":true},{"type":"point","x":125,"y":25,"move":false},{"type":"point","x":150,"y":50,"move":false},{"type":"point","x":250,"y":50,"move":false},{"type":"point","x":75,"y":50,"move":true},{"type":"point","x":125,"y":50,"move":false},{"type":"point","x":150,"y":75,"move":false},{"type":"point","x":250,"y":75,"move":false},{"type":"point","x":75,"y":75,"move":true},{"type":"point","x":125,"y":75,"move":false},{"type":"point","x":175,"y":125,"move":false},{"type":"point","x":250,"y":125,"move":false},{"type":"point","x":150,"y":100,"move":true},{"type":"point","x":250,"y":100,"move":false},{"type":"point","x":200,"y":125,"move":true},{"type":"point","x":200,"y":200,"move":false},{"type":"point","x":225,"y":225,"move":false},{"type":"point","x":225,"y":125,"move":true},{"type":"point","x":225,"y":250,"move":false},{"type":"point","x":100,"y":75,"move":true},{"type":"point","x":175,"y":150,"move":false},{"type":"point","x":175,"y":225,"move":false},{"type":"point","x":200,"y":250,"move":false},{"type":"point","x":75,"y":75,"move":true},{"type":"point","x":75,"y":150,"move":false},{"type":"point","x":125,"y":200,"move":false},{"type":"point","x":125,"y":250,"move":false},{"type":"point","x":100,"y":250,"move":true},{"type":"point","x":100,"y":225,"move":false},{"type":"point","x":50,"y":175,"move":false},{"type":"point","x":50,"y":75,"move":false},{"type":"point","x":25,"y":75,"move":true},{"type":"point","x":25,"y":175,"move":false},{"type":"point","x":50,"y":200,"move":false},{"type":"point","x":50,"y":250,"move":false},{"type":"point","x":75,"y":200,"move":true},{"type":"point","x":75,"y":250,"move":false},{"type":"point","x":100,"y":175,"move":true},{"type":"point","x":175,"y":175,"move":false},{"type":"point","x":150,"y":175,"move":true},{"type":"point","x":150,"y":250,"move":false},{"type":"point","x":150,"y":175,"move":true},{"type":"point","x":75,"y":100,"move":false},{"type":"point","x":0,"y":75,"move":true},{"type":"point","x":0,"y":175,"move":false},{"type":"point","x":25,"y":200,"move":false},{"type":"point","x":25,"y":250,"move":false},{"type":"point","x":-50,"y":75,"move":true},{"type":"point","x":-50,"y":150,"move":false},{"type":"point","x":0,"y":200,"move":false},{"type":"point","x":0,"y":250,"move":false},{"type":"point","x":-25,"y":175,"move":true},{"type":"point","x":-25,"y":75,"move":false},{"type":"point","x":-75,"y":75,"move":true},{"type":"point","x":-75,"y":175,"move":false},{"type":"point","x":-50,"y":200,"move":false},{"type":"point","x":-50,"y":250,"move":false},{"type":"point","x":-50,"y":225,"move":true},{"type":"point","x":-25,"y":250,"move":false},{"type":"point","x":-75,"y":250,"move":true},{"type":"point","x":-75,"y":200,"move":false},{"type":"point","x":-125,"y":150,"move":false},{"type":"point","x":-125,"y":25,"move":false},{"type":"point","x":-75,"y":-25,"move":false},{"type":"point","x":-100,"y":0,"move":true},{"type":"point","x":-100,"y":75,"move":false},{"type":"point","x":-75,"y":100,"move":false},{"type":"point","x":-75,"y":150,"move":true},{"type":"point","x":-125,"y":100,"move":false},{"type":"point","x":-125,"y":50,"move":true},{"type":"point","x":-225,"y":50,"move":false},{"type":"point","x":-250,"y":75,"move":false},{"type":"point","x":-125,"y":75,"move":true},{"type":"point","x":-225,"y":75,"move":false},{"type":"point","x":-250,"y":100,"move":false},{"type":"point","x":-250,"y":50,"move":true},{"type":"point","x":-200,"y":0,"move":false},{"type":"point","x":-125,"y":0,"move":false},{"type":"point","x":-75,"y":-50,"move":false},{"type":"point","x":-125,"y":25,"move":true},{"type":"point","x":-225,"y":25,"move":false},{"type":"point","x":-250,"y":125,"move":true},{"type":"point","x":-225,"y":100,"move":false},{"type":"point","x":-125,"y":100,"move":false},{"type":"point","x":-125,"y":125,"move":true},{"type":"point","x":-200,"y":125,"move":false},{"type":"point","x":-250,"y":175,"move":false},{"type":"point","x":-225,"y":150,"move":true},{"type":"point","x":-150,"y":150,"move":false},{"type":"point","x":-125,"y":175,"move":false},{"type":"point","x":-75,"y":225,"move":false},{"type":"point","x":-100,"y":200,"move":true},{"type":"point","x":-100,"y":250,"move":false},{"type":"point","x":-125,"y":175,"move":true},{"type":"point","x":-125,"y":250,"move":false},{"type":"point","x":-175,"y":150,"move":true},{"type":"point","x":-175,"y":250,"move":false},{"type":"point","x":-175,"y":200,"move":true},{"type":"point","x":-150,"y":225,"move":false},{"type":"point","x":-150,"y":250,"move":false},{"type":"point","x":-175,"y":175,"move":true},{"type":"point","x":-125,"y":225,"move":false},{"type":"point","x":-200,"y":150,"move":true},{"type":"point","x":-200,"y":200,"move":false},{"type":"point","x":-175,"y":225,"move":false},{"type":"point","x":-200,"y":175,"move":true},{"type":"point","x":-250,"y":225,"move":false},{"type":"point","x":-225,"y":200,"move":true},{"type":"point","x":-200,"y":225,"move":false},{"type":"point","x":-200,"y":250,"move":false},{"type":"point","x":-75,"y":-75,"move":true},{"type":"point","x":-125,"y":-25,"move":false},{"type":"point","x":-225,"y":-25,"move":false},{"type":"point","x":-250,"y":0,"move":false},{"type":"point","x":-150,"y":-25,"move":true},{"type":"point","x":-100,"y":-75,"move":false},{"type":"point","x":-100,"y":-150,"move":false},{"type":"point","x":-75,"y":-175,"move":false},{"type":"point","x":-75,"y":-250,"move":false},{"type":"point","x":-100,"y":-250,"move":true},{"type":"point","x":-100,"y":-175,"move":false},{"type":"point","x":-125,"y":-150,"move":false},{"type":"point","x":-125,"y":-50,"move":false},{"type":"point","x":-125,"y":-125,"move":true},{"type":"point","x":-175,"y":-175,"move":false},{"type":"point","x":-175,"y":-250,"move":false},{"type":"point","x":-150,"y":-150,"move":true},{"type":"point","x":-150,"y":-250,"move":false},{"type":"point","x":-150,"y":-175,"move":true},{"type":"point","x":-125,"y":-200,"move":false},{"type":"point","x":-125,"y":-250,"move":false},{"type":"point","x":-125,"y":-100,"move":true},{"type":"point","x":-200,"y":-175,"move":false},{"type":"point","x":-200,"y":-225,"move":false},{"type":"point","x":-225,"y":-250,"move":false},{"type":"point","x":-125,"y":-75,"move":true},{"type":"point","x":-175,"y":-125,"move":false},{"type":"point","x":-250,"y":-125,"move":false},{"type":"point","x":-200,"y":-125,"move":true},{"type":"point","x":-250,"y":-175,"move":false},{"type":"point","x":-225,"y":-150,"move":true},{"type":"point","x":-225,"y":-200,"move":false},{"type":"point","x":-250,"y":-225,"move":false},{"type":"point","x":-125,"y":-75,"move":true},{"type":"point","x":-225,"y":-75,"move":false},{"type":"point","x":-250,"y":-100,"move":false},{"type":"point","x":-250,"y":-125,"move":true},{"type":"point","x":-200,"y":-75,"move":false},{"type":"point","x":-225,"y":-125,"move":true},{"type":"point","x":-200,"y":-100,"move":false},{"type":"point","x":-150,"y":-100,"move":false},{"type":"point","x":-125,"y":-50,"move":true},{"type":"point","x":-175,"y":-50,"move":false},{"type":"point","x":-200,"y":-25,"move":false},{"type":"point","x":-225,"y":-25,"move":true},{"type":"point","x":-250,"y":-50,"move":false},{"type":"stroke","r":125,"g":125,"b":50},{"type":"point","x":-75,"y":-75,"move":true},{"type":"point","x":-75,"y":75,"move":false},{"type":"point","x":75,"y":75,"move":false},{"type":"point","x":75,"y":-75,"move":false},{"type":"close"},{"type":"fill","r":150,"g":150,"b":100},{"type":"stroke","r":125,"g":125,"b":50}]`
        ), onSpawn(rarity,bullet) {
            bullet.aachip = true;
        }, bulletTick(rarity,bullet) {
            if (!bullet.aachip) return;

            closestDist = Infinity;
            closest = -1;
            enemies.forEach( (enemy,i) => {
                if (enemy.projectile) return;
                const dist = Math.hypot(enemy.x-bullet.x,enemy.y-bullet.y)-enemy.size-bullet.size;
                if (dist < 250 && dist > 200 && dist < closestDist) {
                    closestDist = dist;
                    closest = i;
                }
            })

            if (closest != -1) {
                if (bullet.speed < closestDist/30) {
                    bullet.vx = (enemies[closest].x-bullet.x)/10;
                    bullet.vy = (enemies[closest].y-bullet.y)/10;
                    bullet.speed = closestDist/30;
                } else {
                    bullet.vx = (enemies[closest].x-bullet.x)/closestDist*bullet.speed*1.2;
                    bullet.vy = (enemies[closest].y-bullet.y)/closestDist*bullet.speed*1.2;
                }
                bullet.aachip = false;
            }
        }, onHit(rarity,bullet) {
            bullet.aachip = true;
        }
/*BH*/},{
        name: "Black Hole",
        desc: "Bullets gravitate towards enemies, +1 pierce",
        drawPath: JSON.parse(
            `[{"type":"point","x":-375,"y":0},{"type":"point","x":-187.5,"y":-31.25},{"type":"point","x":-93.75,"y":-125},{"type":"point","x":0,"y":-156.25},{"type":"point","x":93.75,"y":-125},{"type":"point","x":187.5,"y":-31.25},{"type":"point","x":375,"y":0},{"type":"point","x":187.5,"y":31.25},{"type":"point","x":93.75,"y":125},{"type":"point","x":0,"y":156.25},{"type":"point","x":-93.75,"y":125},{"type":"point","x":-187.5,"y":31.25},{"type":"close"},{"type":"fill","r":40,"g":40,"b":40},{"type":"stroke","r":60,"g":65,"b":65},{"type":"point","x":0,"y":-93.75},{"type":"point","x":-46.875,"y":-78.125},{"type":"point","x":-78.125,"y":-46.875},{"type":"point","x":-93.75,"y":0},{"type":"point","x":-78.125,"y":46.875},{"type":"point","x":-46.875,"y":78.125},{"type":"point","x":0,"y":93.75},{"type":"point","x":46.875,"y":78.125},{"type":"point","x":78.125,"y":46.875},{"type":"point","x":93.75,"y":0},{"type":"point","x":78.125,"y":-46.875},{"type":"point","x":46.875,"y":-78.125},{"type":"close"},{"type":"fill","r":0,"g":0,"b":0},{"type":"stroke","r":25,"g":25,"b":25},{"type":"point","x":-300,"y":-25},{"type":"point","x":-200,"y":-50},{"type":"point","x":-100,"y":-150},{"type":"point","x":-25,"y":-175},{"type":"point","x":25,"y":-175},{"type":"point","x":100,"y":-150},{"type":"point","x":200,"y":-50},{"type":"point","x":300,"y":-25},{"type":"point","x":300,"y":25,"move":true},{"type":"point","x":200,"y":50,"move":false},{"type":"point","x":100,"y":150,"move":false},{"type":"point","x":25,"y":175,"move":false},{"type":"point","x":-25,"y":175,"move":false},{"type":"point","x":-100,"y":150,"move":false},{"type":"point","x":-200,"y":50,"move":false},{"type":"point","x":-300,"y":25,"move":false},{"type":"point","x":-200,"y":-75,"move":true},{"type":"point","x":-100,"y":-175,"move":false},{"type":"point","x":200,"y":75,"move":true},{"type":"point","x":100,"y":175,"move":false},{"type":"point","x":-125,"y":175,"move":true},{"type":"point","x":-25,"y":212.5,"move":false},{"type":"point","x":37.5,"y":-200,"move":true},{"type":"point","x":125,"y":-162.5,"move":false},{"type":"point","x":-225,"y":-162.5,"move":true},{"type":"point","x":-137.5,"y":-250,"move":false},{"type":"point","x":-250,"y":150,"move":true},{"type":"point","x":-162.5,"y":225,"move":false},{"type":"point","x":112.5,"y":237.5,"move":true},{"type":"point","x":187.5,"y":175,"move":false},{"type":"point","x":125,"y":-237.5,"move":true},{"type":"point","x":225,"y":-125,"move":false},{"type":"stroke","r":255,"g":255,"b":255}]`
        ), statChange(_) {
            stats.pierce = stats.pierce || 0 + 1
        }, bulletTick(_,bullet) {
            closestDist = Infinity;
            closest = -1;
            enemies.forEach( (enemy,i) => {
                if (enemy.projectile) return;
                const dist = Math.hypot(enemy.x-bullet.x,enemy.y-bullet.y)-enemy.size-bullet.size;
                if (dist < 800 && dist > 25 && dist < closestDist) {
                    closestDist = dist;
                    closest = i;
                }
            })

            if (closest != -1) {
                bullet.vx = (enemies[closest].x-bullet.x)/closestDist*stats.bulletSpeed/20 + bullet.vx*0.96;
                bullet.vy = (enemies[closest].y-bullet.y)/closestDist*stats.bulletSpeed/20 + bullet.vy*0.96;
                if (bullet.tick%10 < 1) {
                    bullet.direction = (Math.atan(bullet.vy/bullet.vx) + Math.PI*(bullet.vx < 0)) || (Math.PI*(bullet.vx < 0));
                }
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
        draw(item.x,item.y,game[item.reference.type + "Background"],size,-player.rotationTick*3,false,true);
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

        if (game.menu == "inventory") {
            ctx.font = "18px Share Tech";
            ctx.strokeStyle = "#555";
            ctx.lineWidth = 15;
            ctx.strokeText("Click to drop", item.x,item.y+190);
            ctx.strokeStyle = "#222";
            ctx.lineWidth = 9;
            ctx.strokeText("Click to drop", item.x,item.y+190);
            ctx.fillText("Click to drop", item.x,item.y+190);
        } else {
            ctx.font = "18px Share Tech";
            ctx.strokeStyle = "#555";
            ctx.lineWidth = 15;
            ctx.strokeText("Press E to pick up", item.x,item.y+190);
            ctx.strokeStyle = "#222";
            ctx.lineWidth = 9;
            ctx.strokeText("Press E to pick up", item.x,item.y+190);
            ctx.fillText("Press E to pick up", item.x,item.y+190);
        }

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
        dashRegenerateRate: 1/75,
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

                artifacts.splice(artifacts.indexOf(closestItem.reference),1);
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
RD},{
        name: "Red Dot",
        desc: "Increased damage far away",
        drawPath: JSON.parse(
            `[{"type":"point","x":0,"y":-250},{"type":"point","x":175,"y":-175},{"type":"point","x":250,"y":0},{"type":"point","x":175,"y":175},{"type":"point","x":0,"y":250},{"type":"point","x":-175,"y":175},{"type":"point","x":-250,"y":0},{"type":"point","x":-175,"y":-175},{"type":"close"},{"type":"point","x":0,"y":-200,"move":true},{"type":"point","x":-137.5,"y":-137.5,"move":false},{"type":"point","x":-200,"y":0,"move":false},{"type":"point","x":-137.5,"y":137.5,"move":false},{"type":"point","x":0,"y":200,"move":false},{"type":"point","x":137.5,"y":137.5,"move":false},{"type":"point","x":200,"y":0,"move":false},{"type":"point","x":137.5,"y":-137.5,"move":false},{"type":"close"},{"type":"fill","r":75,"g":75,"b":75},{"type":"stroke","r":50,"g":50,"b":50},{"type":"point","x":0,"y":-75,"move":false},{"type":"point","x":-50,"y":-50,"move":false},{"type":"point","x":-75,"y":0,"move":false},{"type":"point","x":-50,"y":50,"move":false},{"type":"point","x":0,"y":75,"move":false},{"type":"point","x":50,"y":50,"move":false},{"type":"point","x":75,"y":0,"move":false},{"type":"point","x":50,"y":-50,"move":false},{"type":"close"},{"type":"fill","r":200,"g":50,"b":50},{"type":"stroke","r":75,"g":0,"b":0}]`
        ), damageBoost(rarity,bullet,enemy) {
            const dist = Math.hypot(player.x-bullet.x,player.y-bullet.y);
            if (dist > 300) return 1 + dist*(0.001 + 0.0005*rarity);
            else return 1;
        }
        
        */