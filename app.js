'use strict';

const Homey = require('homey');

class SonosFavoriteCarouselApp extends Homey.App {

  /**
   * onInit is called when the app is initialized.
   */
  async onInit() {
    this.log('SonosFavoriteCarouselApp has been initialized');
  }

}

module.exports = SonosFavoriteCarouselApp;
