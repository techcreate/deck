function Card(value, suit){
	this.value = value;
	this.suit = suit;
	return this;
}
function Deck(deck,reset,shuffle, deal){
	this.deck = new Array();

	this.reset = reset;
	this.shuffle = shuffle;
	this.deal = deal;
	return this;
}
Deck.prototype.reset = function(){
	var value = new deck_cards("Ace","2","3","4","5","6","7","8","9","10","Jack","Queen","King");
	var suit = new deck_cards("Clubs","Diamonds","Hearts","Spades");
	this.deck = new deck_cards(52);

	var i, j;
	for (i = 0; i < suit.length; i++)
	{
		for (j = 0; j < value.length; j++) 
		{
			this.deck[i * value.length + j] = new Card(value[j], suit[i]);
		}
	}
	return this;
};

Deck.prototype.shuffle = function() {
	var i, n, j, temp;
	for (i = 0; i < n; i++) 
	{
		for (j = 0; j < this.deck.length; j++) 
		{
			rand = Math.floor(Math.random() * this.deck.length);
			temp = this.deck[j];
			this.deck[j] = this.deck[rand];
			this.deck[rand] = temp;
		}
	}
	return this;
};

Deck.prototype.deal = function() {
	if (this.deck.length > 0) 
	{
		return this.deck.shift();
	}
	else return null;
};

Deck.prototype.Draw = function(n) {
	var card;
	if (n >= 0 && n < this.deck.length) {
		card = this.deck.splice(n, 1);
	}
	else
		card = null;
	return card;
}

function Player(name, hand){
	this.name = name;
	this.hand = hand;
	
}
Player.prototype.draw_card = function(){
	console.log(this.name + 'draws a card.');
	this.hand = deck.deal();
}
Player.prototype.discard = function(){
	console.log(this.name + 'has discarded a card');
	var card;
	if (n >= 0 && n < this.deck.lenght) {
		card = this.deck.splice(n,1);
	}
	
}
console.log(card);
