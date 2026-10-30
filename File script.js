function pesan(nama, harga) {
    let jumlah = prompt("Masukkan jumlah pesanan:");

    if (jumlah === null || jumlah.trim() === "") {
        alert("Pesanan dibatalkan.");
        return;
    }

    jumlah = Number(jumlah);

    if (!Number.isInteger(jumlah) || jumlah <= 0) {
        alert("Jumlah pesanan tidak valid!");
        return;
    }

    let total = harga * jumlah;

    alert(
        "SEBLAK JAJANAN DOWER\n" +
        "Menu: " + nama + "\n" +
        "Harga: Rp" + harga + "\n" +
        "Jumlah: " + jumlah + "\n" +
        "Total: Rp" + total
    );
}
