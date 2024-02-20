export function appliquerCoupon(produit, coupon) {

    if (!couponExiste(coupon)) {
        return "Coupon invalide";
    }

    if (!produitDansPanier(produit)) {
        return "Produit non trouvé dans le panier";
    }

    const remise = obtenirRemiseCoupon(coupon);
    const nouveauPrix = produit.prix - remise;

    if (nouveauPrix < 0) {
        return "Prix remisé négatif";
    }

    produit.prix = nouveauPrix;

    return "Coupon appliqué avec succès";
}


function couponExiste(coupon) {

    return true;
}

function produitDansPanier(produit) {

    return true;
}

function obtenirRemiseCoupon(coupon) {

    return 15;
}
