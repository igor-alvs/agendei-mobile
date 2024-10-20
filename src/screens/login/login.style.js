import { colors } from '../../constants/theme.js';

export const styles = {
    container: {
        flex: 1,
        justifyContent: 'space-between',
        padding: 40
    },

    containerLogo: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 100
    },

    logo: {
        width: 180,
        height: 56
    },

    text: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    containerInput: {
        gap: 15
    },

    input: {
        backgroundColor: colors.gray,
        borderRadius: 6,
        padding: 12,
    },

    footer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent:'center'
    },

    footerLink: {
        color: colors.mediumPurple
    }
}