'use strict';

var _ = require('lodash')
    , shortid = require('shortid')
    , Entity = require('../../../shared/core/entity')
    , config = require('../config.json')
    , DataManager = require('./dataManager')
    , EntityFactory;

/**
 * Entity factory static class.
 * @class server.core.EntityFactory
 * @classdesc Factory class for creating entities.
 */
EntityFactory = {
    /**
     * Creates a new entity.
     * @method server.core.EntityFactory#create
     * @param {string} key - Entity type.
     * @return {shared.core.Entity} Entity instance.
     */
    create: function(key) {
        var data = this.loadData(key)
            , entity = new Entity(data, config);

        // TODO consider including components in the data and attaching them here

        return entity;
    }
    /**
     * Loads data for a specific entity.
     * @method server.core.EntityFactory#loadData
     * @param {string} key - Entity type.
     * @return {object} Entity data.
     */
    , loadData: function(key) {
        var data = DataManager.getEntity(key);

        return {
            id: shortid.generate()
            , key: data.key
            , attrs: _.clone(data.attrs)
        };
    }
};

module.exports = EntityFactory;
