import { ICoordinates } from '../interface/ICoordinates';
import { ISnake } from '../interface/ISnake';

export class Snake implements ISnake {
    possibleDirection: ReadonlyArray<string>;
    body: Array<ICoordinates>;
    direction: string;

    constructor(){
        this.possibleDirection = ['up', 'down', 'left', 'right'];

        this.body = [{
            x: 1,
            y: 1,
        }];

        this.direction = 'down';
    }

    changeDirection(newDirection: string){
        if(!this.possibleDirection.includes(newDirection)){
            throw new Error(`Передано недопустимое направление движения: ${newDirection}`);
        }

        if(this.isOppositeDirection(newDirection)){
            return;
        }

        this.direction = newDirection;
    }

    isOppositeDirection(newDirection: string){
        if(this.direction === 'down' && newDirection === 'up'){
            return true;
        }

        if(this.direction === 'up' && newDirection === 'down'){
            return true;
        }

        if(this.direction === 'left' && newDirection === 'right'){
            return true;
        }

        if(this.direction === 'right' && newDirection === 'left'){
            return true;
        }

        return false;
    }

    //Следующий шаг змейки
    performStep(){
        let currentHeadCoords: ICoordinates = this.body[0]; //Head
        let newHeadCoords: ICoordinates = {
            x: currentHeadCoords.x,
            y: currentHeadCoords.y,
        };

        switch(this.direction){
            case 'down':
                newHeadCoords.y++;
                break;
            case 'up':
                newHeadCoords.y--;
                break;
            case 'left':
                newHeadCoords.x--;
                break;
            case 'right':
                newHeadCoords.x++;
                break;
        }

        this.body.unshift(newHeadCoords);
        this.body.pop();
    }

    //Увеличение тела змейки
    increaseBody(){
        let bodyLastCell = this.body[this.body.length - 1];
        let newBodyLastCell = {
            x: bodyLastCell.x,
            y: bodyLastCell.y,
        };

        this.body.push(newBodyLastCell);
    }
} 