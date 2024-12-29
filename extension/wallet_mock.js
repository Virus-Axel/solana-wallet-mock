class walletMock {
    keypair = null;
    publicKey = null;
    isPhantom = true;
    isSolflare = true;
    isBackpack = true;
    seed = [212, 213, 85, 205, 66, 11, 85, 31, 176, 147, 211, 179, 203, 215, 207, 142, 236, 64, 163, 236, 134, 10, 2, 164, 139, 227, 158, 245, 255, 215, 68, 235, 156, 46, 241, 95, 10, 63, 9, 253, 47, 54, 64, 27, 211, 105, 240, 71, 14, 185, 154, 30, 57, 249, 59, 38, 139, 157, 223, 1, 82, 181, 191, 226];

    connected = false;
    _readyState = "Installed";
    readyState = "Installed";

    // Called by wallet adapter. Do nothing.
    on() {
    }

    signTransaction(tx) {
        tx.sign(this.keypair);
        return tx;
    }

    connect() {
        if (this.seed) {
            this.keypair = (solanaWeb3.Keypair.fromSecretKey(new Uint8Array(this.seed)));
        }
        else {
            this.keypair = (new solanaWeb3.Keypair());
        }
        this.publicKey = this.keypair.publicKey;

        return this.keypair.publicKey;
    }
};

window.backpack = new walletMock();
window.solflare = new walletMock();
window.phantom = new walletMock();
window.solana = new walletMock();
