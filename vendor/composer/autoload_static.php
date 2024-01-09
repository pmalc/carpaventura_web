<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit4c413adc8cb792c1feead0531356802d
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'PHPMailer\\PHPMailer\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'PHPMailer\\PHPMailer\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmailer/phpmailer/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit4c413adc8cb792c1feead0531356802d::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit4c413adc8cb792c1feead0531356802d::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit4c413adc8cb792c1feead0531356802d::$classMap;

        }, null, ClassLoader::class);
    }
}