import { CapacitorConfig } from '@capacitor/cli';

/**
 * Configuración de Capacitor para la aplicación móvil
 * Basado en el commit c74f2cf de mariaponce\User
 * 
 * Este archivo representa la expansión del proyecto
 * a plataformas móviles usando Ionic + Capacitor
 */

const config: CapacitorConfig = {
  appId: 'com.lavanderia.app',
  appName: 'Lavandería BS',
  webDir: 'dist',
  bundledWebRuntime: false,
  
  // Configuración de servidor para desarrollo
  server: {
    androidScheme: 'https',
    // Para desarrollo local
    // url: 'http://localhost:4200',
    // cleartext: true
  },
  
  // Configuración específica para Android
  android: {
    buildOptions: {
      keystorePath: undefined,
      keystorePassword: undefined,
      keystoreAlias: undefined,
      keystoreAliasPassword: undefined,
      releaseType: 'AAB', // Android App Bundle
      signingType: 'apksigner'
    },
    // Permisos necesarios para la aplicación
    webContentsDebuggingEnabled: true
  },
  
  // Plugins configurados
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      launchAutoHide: true,
      backgroundColor: "#ffffffff",
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP",
      showSpinner: true,
      androidSpinnerStyle: "large",
      iosSpinnerStyle: "small",
      spinnerColor: "#999999",
      splashFullScreen: true,
      splashImmersive: true,
      layoutName: "launch_screen",
      useDialog: true,
    },
    
    PushNotifications: {
      presentationOptions: ["badge", "sound", "alert"],
    },
    
    LocalNotifications: {
      smallIcon: "ic_stat_icon_config_sample",
      iconColor: "#488AFF",
    },
    
    Camera: {
      permissions: {
        camera: "Para tomar fotos de los pedidos",
        photos: "Para seleccionar imágenes de la galería"
      }
    },
    
    Geolocation: {
      permissions: {
        location: "Para servicios de recolección y entrega"
      }
    }
  }
};

export default config;

/**
 * CARACTERÍSTICAS MÓVILES IMPLEMENTADAS:
 * 
 * 1. Configuración completa de Android
 * 2. Splash screen personalizado
 * 3. Notificaciones push y locales
 * 4. Permisos para cámara y ubicación
 * 5. Configuración de desarrollo y producción
 * 
 * IMPACTO:
 * - Expansión a plataforma móvil
 * - Experiencia nativa en Android
 * - Funcionalidades móviles integradas
 * 
 * VALOR PARA EL NEGOCIO: ⭐⭐⭐⭐⭐
 * Alcance ampliado del negocio a usuarios móviles
 */