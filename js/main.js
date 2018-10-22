'use strict';

import {deactivateMap, activateMapAfterClick} from './map-activate';
import {makeMainPinDraggable} from './drag-pin-main';
import {checkPriceValueInForm} from './form';
import {getFromServer, onError} from './backend';
import {synchronizeRelatedFormFields} from './syncronize';
import {showSortedCards} from './filter';

deactivateMap();
activateMapAfterClick();
makeMainPinDraggable();
synchronizeRelatedFormFields();
checkPriceValueInForm();  
getFromServer(showSortedCards, onError);