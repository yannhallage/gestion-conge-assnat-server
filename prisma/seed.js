"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const bcrypt = __importStar(require("bcrypt"));
const prisma = new client_1.PrismaClient();
async function main() {
    console.log('🟢 Début du seed minimal');
    const directionRH = await prisma.direction.create({
        data: {
            code_direction: 'DIR-RH',
            nom_direction: 'Direction des Ressources Humaines',
            nom_directeur: 'Alice Dupont',
            email_direction: 'rh@entreprise.com',
        },
    });
    const serviceRH = await prisma.service.create({
        data: {
            code_service: 'SRH-GEN',
            nom_service: 'Service Général RH',
            id_direction: directionRH.id_direction,
        },
    });
    const passwordHash = await bcrypt.hash('Admin@1234', 10);
    await prisma.personnel.create({
        data: {
            nom_personnel: 'Admin',
            prenom_personnel: 'RH',
            email_personnel: 'admin@entreprise.com',
            email_travail: 'admin.rh@entreprise.com',
            password: passwordHash,
            role_personnel: client_1.RolePersonnel.ADMIN,
            type_personnel: client_1.TypePersonnel.PERMANENT,
            id_service: serviceRH.id_service,
        },
    });
    console.log('✅ Seed minimal terminé : admin prêt à se connecter');
}
main()
    .catch((e) => {
    console.error('❌ Erreur lors du seed:', e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map