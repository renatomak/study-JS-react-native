package br.com.alura.forum.service;

import br.com.alura.forum.controller.dto.TopicoRequestDto;
import br.com.alura.forum.controller.dto.TopicoResponseDto;

public interface TopicoService {
	
	TopicoResponseDto getTopicos(TopicoRequestDto topicoRequestDto);
}
