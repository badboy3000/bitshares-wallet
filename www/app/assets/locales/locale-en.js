module.exports = {

languages: {

        en: 'English (EN)',
        de: 'German (DE)',
        es: 'Spanish (ES)',
        fr: 'French (FR)',
        sk: 'Slovak (SK)',
        fi: 'Finish (Fi)',
        bg: 'Bulgarian (BG)',
        ja: 'Japanese (JA)',
        zh: 'Chinese (ZH; simplified, mandarin)',
        hi: 'Hindi (Hi)',
        tr: 'Turkish (TR)',
        hr: 'Croatian (HR)',
        el: 'Greek (EL)',
        it: 'Italian (IT)',
        pl: 'Polish (PL)',
        bs: 'Bosnian (BS)',
        ro: 'Romanian (RO)',
        sr: 'Serbian (SR)',
        ar: 'Arabic (AR)',
        sq: 'Albanian (SQ)',
        hu: 'Hungarian (HU)',
        ru: 'Russian (RU)'
 },

  wallet: {

	switch_language: 'Switch Language: ',
	// additional
	existing_password: "Existing PIN",   
	verify: "Verify",	
	enter_password: "Enter Password",	
    reset: "Reset",
	//change_password: "Change PIN",
	accept: "Accept",

	
	
	

home: {
		balances: 'BALANCES',
		contacts: 'CONTACTS',
		finder: 'FINDER',
		exchange: 'EXCHANGE',
		receive: 'RECEIVE',
		send: 'SEND',
		balances: 'Balances',
		transactions: 'Transactions',
		date: 'Date',
		all: 'All',
		sent: 'Sent',
		recd: "Rec'd",
		to: 'To',
		from: 'From',
		amount: 'Amount',
		asset: 'Asset',
		name: 'Name',
		account: 'Account',
		memo: 'Memo',
		donateToDevs: 'Donate 2 BTS to the Support Developers at BitShares Munich',
		requestSpecificAmount: 'Request a specific Amount (optional)',
		sharePaymentRequest: 'Share this Payment Request',
		inviteFriend: 'Invite a Friend',
		continue: 'Continue',
		buy: 'Buy',
		sell: 'Sell',
		cancel: 'Cancel',
		back: 'Back',
		none: 'None',
		please_wait: 'Please wait',
		thank_you: 'Thank you',
		balance: 'Balance',
		publicKey: 'Public Key',
		privateKey: 'Private Key',
		yes: 'Yes',
		no: 'No'
	}, 
	settings:{
		bitsharesWalletSettings: 'BitShares Wallet Settings',
		taxableCountry: 'Taxable Country',
		preferredLanguage: 'Preferred Language',
		displayDtAs: 'Display Dates and Times as',
		getPricesFrom: 'Get prices from',
		additionalSettings: 'Additional Settings',
		checkUpdatesStartup: 'Check for updates on startup',
		autoInstallMajorVer: 'Automatically install major version releases',
		requirePinToSend: 'Require PIN to Send funds',
		autoCloseWalletAfterInactivity: 'Automatically close BitShares Wallet after 3 minutes of inactivity',
		alwaysDonateDevsMunich: 'Always donate 2 BTS to the Support Developers at BitShares Munich (bitshares-munich)',
		allowUse_GpsToFind: 'Allow the Finder (v2.0) to use GPS to find nearest ATM’s, Humans and POS systems with Smartcoins',
		allowReportPosition : 'Allow the Finder (v2.0) to report your position so that others can buy or sell Smartcoins with you',
		pinNumber: 'PIN number',
		createEditPin: 'Create or Edit your 6-digit PIN to secure your funds and accounts',
		editPin: 'Edit your 6-digit PIN to secure your funds and accounts',
		secureWithPin: 'Secure my entire BitShares Wallet with this PIN',
		pinFraudNote: 'Note: If a wrong PIN is entered 3 times, then BitShares Wallet will close and cannot be unlocked for 15 minutes.',
		backup: 'Backup',
		createEditSeed: 'Create or Edit your Master Seed (a 12 word brain wallet)',
		editSeed: 'Edit your Master Seed (a 12 word brain wallet)',
		coldStorageSpending: 'Cold Storage Spending',
		importPrivateKey: 'Import a Private Key and its funds from a paper QR code or Clipboard.',
		qa: 'Q&A',
		q_sharePublicAddress: 'Q: How do I share my BTS public address with someone?',
		a_sharePublicAddress: 'A: On the home screen, tap on the QR code, or tap and hold on the BTS… address.',
		q_accessPrivateKeys: 'Q: How do I access my private keys?',
		a_accessPrivateKeys: 'A: On the home screen, tap and hold on the user account identicon that appears to the left of the user account name.',
		q_switchAccount : 'Q: How do I switch to a different account on the home screen?',
		a_switchAccount : 'A: Click on the little black arrow that appears to the right of the user account name.',
		q_searchTransaction: 'Q: How do I search for a specific transaction?',
		a_searchTransaction: 'A: Click on a column header to sort by that column (ascending or descending). A search field will be added soon.',
		about: 'About',
		bitsharesMunichDonationRequest: 'BitShares Munich brings Smartcoin technology and services to Investors and Businesses worldwide. Please consider donating to the BitShares Wallet project so the Developers can afford to keep this wallet secure, bug free and constantly improving. Thank you!',
		privacy: 'Privacy',
		tcTitle: 'Terms & Conditions',
		tcFullText: 'Funds, data and assets can be lost by using this software. I will not use this software for any illegal activity. Balances and Exchange prices may not be accurate. BitShares Munich, BitShares, nor any entities involved with the creation or maintenance of this software shall be held liable for any damages. Use at your own risk. If you agree to these terms and conditions, please tap on the “I Agree” button below.',
		cancelAndExit: 'Cancel and Exit',
		iAgree: 'I Agree',
		confirmSendAmount: 'Are you sure you want to send nn XX',
		confirmSendAmountRecipient: 'to yy?',
		continue: 'Continue',
		cancel: 'Cancel',		
	}, 
	backup:{		
		create_backup: "Create Backup",
        reset: "Reset",
        download: "Download",
		createBackupPrompt: 'Please make backup of your wallet to continue',

	},
	
	
	unused: {		
        import_backup: "Import Backup",
        restore_backup: "Restore Backup",
		create_backup_of: "Create Backup (%(name)s Wallet)",
        title: "Wallet",
        confirm: "Password (confirm)",
        password: "Password",
        change_wallet: "Change Wallet",
        wallet_created: "Wallet Created",
        create_wallet: "Create Wallet",
        import_bts1: "Import from BitShares 0.9.3c",
        setup_wallet: "Setup your wallet",
        delete_wallet: "Delete Wallet",
        delete_confirm_line1: "Are you ABSOLUTELY sure?",
        delete_confirm_line2: "Unexpected bad things will happen if you don’t read this!",
        delete_confirm_line3: "This action CANNOT be undone.",
        delete_wallet_name: "Delete Wallet (%(name)s)",
        balance_claims: "Balance Claims",
        name: "Wallet Name",
        create: "Create",
        console: "Wallet Management Console",
        create_backup: "Create Backup",
        backup_brainkey: "Backup Brainkey",
        import_keys: "Import Keys",
        import_keys_tool: "Key Import Tool",
        brainkey: "Brainkey",
        new_wallet: "New Wallet",
        active_wallet: "Active Wallet",
        verified: "Verified",
        verify_prior_backup: "Verify Prior Backup",
        brainkey_not_verified: "This Brainkey is not verified",
        cancel: "Cancel",
        done: "Done",        
        invalid_format: "Invalid Format",        
        downoad: "Download",
        new_wallet_name: "New Wallet Name",
        wallet_exist: "Wallet exists, choose a new name",
        wallet_exist_with_name: "Wallet (%(name)s) exists, please change the name",
       
        ready_to_restore: "Ready to Restore",
        restore_wallet_of: "Restore (%(name)s Wallet)",
        restore_success: "Successfully restored (%(name)s) wallet",
        change: "Change (%(name)s Wallet)",
        import_20_notice1: "Import your BTS 2.0+ BACKUP first",
        import_20_notice2: "(if you have one)",
        loading_balances: "Loading balance claims",
        no_balance: "No balance claims",
        claim_balance: "Claim Balance",
        claim_balances: "Claim Balances",
        balance_claim_lookup: "Lookup balances",
        unclaimed: "Unclaimed",
        unclaimed_vesting: "Unclaimed (vesting)",
        no_accounts: "No Accounts",
        brainkey_no_match: "Brainkey does not match, keep going",
        reenter_brainkey: "Re-Enter Brainkey",
        pwd4brainkey: "Enter password to show your brainkey",
        show_brainkey: "Show Brainkey",
        brainkey_w1: "WARNING: Print this out, or write it down.",
        brainkey_w2: "Anyone with access to your recovery key will",
        brainkey_w3: "have access to funds within this wallet.",
        custom_brainkey: "Custom Brainkey (advanced)",
        last_backup: "Last backup",
        never_backed_up: "This Wallet has never been backed up",
        need_backup: "This Wallet needs a backup",
        noneed_backup: "No backup is needed"
	},	
	dialog: {
		enterPin: 'Enter PIN',
		incorrectPin: 'Incorrect PIN',
		protectPinMessage: 'Please Protect your PIN code',
		fraudAttemptMessage: 'Fraud Attempt! (on 3 consecutive incorrect PINs)'
}


  }
};