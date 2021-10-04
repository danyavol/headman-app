import { SchemaValidation } from '@services/schema-validation.service';
import { Schema } from 'mongoose';
import { v4 as uuid } from 'uuid';

export interface IGroup {
    groupId: string,
    name: string,
    members: string[]
}

export const GroupSchema = new Schema<IGroup>({
    groupId: {
        type: String,
        default: uuid,
        unique: true
    },
    name: {
        type: String,
        maxlength: SchemaValidation.maxLength(50),
        required: true
    },
    members: [{
        type: String,
        default: []
    }]
});