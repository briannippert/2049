
$comment = Read-Host -Prompt 'Enter Comment: '
git add .
git commit -m $comment
git pull
git push