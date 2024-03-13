<?php declare(strict_types=1);

$result = \TelegramBot\Request::setWebhook([
    'bot_token' => $_ENV['6715897435:AAH4b_3dWrxvMEFa4q4XNv6JSt10L2CKyxc'],
    'url' => $_ENV['REMOTE_PATH'] . '/telegram',
    'drop_pending_updates' => true,
]);

echo $_ENV['REMOTE_PATH'] . '/telegram' . PHP_EOL;
echo $result->isOk() ? 'Webhook set successfully!' : 'Webhook set failed!';