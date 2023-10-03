package main

import (
	"log"
	"os"
	"os/exec"
	"strings"
)

func main() {
	q := GestQuests("piscine.txt")
	CreateStructure(q)
}

func GestQuests(filename string) []string {
	b, err := os.ReadFile(filename)
	if err != nil {
		log.Fatal(err)
	}
	return strings.Split(string(b), "\n\n")
}

func CreateStructure(q []string) {
	for i := range q {
		lines := strings.Split(q[i], "\n")
		exec.Command("mkdir", lines[0]).Run()

		for _, line := range lines[1:] {
			exec.Command("mkdir", "./"+lines[0]+"/"+line).Run()
			exec.Command("touch", "./"+lines[0]+"/"+line+"/"+line+".js").Run()
		}
	}
}
